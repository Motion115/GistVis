import { analyzeFeatures, analyzeValues, analyzeReasoning } from '../featureAnalyzer';
import { RunnableSequence } from '@langchain/core/runnables';

jest.mock('@langchain/core/runnables', () => ({
    RunnableSequence: {
        from: jest.fn(),
    },
}));

describe('analyzeReasoning', () => {
    let mockChain: { invoke: jest.Mock };
    const dummyModel = {} as any;

    beforeEach(() => {
        mockChain = {
            invoke: jest.fn().mockResolvedValue([
                {
                    reasoning: "The text compares values between two entities",
                    type: "comparison",
                    datafactRestatement: "The revenue of A is higher than B's",
                    dataCategory: "revenue",
                    entityCategory: "brand",
                    entities: ["A", "B"]
                }
            ]),
        };
        (RunnableSequence.from as jest.Mock).mockReturnValue(mockChain);
    });

    test('transforms LLM output to ReasoningStructure', async () => {
        const text = "The revenue of A is higher than B's";
        const result = await analyzeReasoning(dummyModel, text);
        expect(mockChain.invoke).toHaveBeenCalled();
        expect(result).toEqual([
            {
                reasoning: "The text compares values between two entities",
                type: "comparison",
                datafactRestatement: "The revenue of A is higher than B's",
                feature: "revenue",
                entity: {
                    space: "brand",
                    breakdowns: ["A", "B"]
                }
            }
        ]);
    });

    test('handles empty result from LLM', async () => {
        mockChain.invoke.mockResolvedValueOnce([]);
        const text = "useless text";
        const result = await analyzeReasoning(dummyModel, text);
        expect(result).toEqual([]);
    });
});

describe('analyzeFeatures', () => {
    let mockChain: { invoke: jest.Mock };
    const dummyModel = {} as any;

    beforeEach(() => {
        mockChain = {
            invoke: jest.fn().mockResolvedValue(["feature1", "feature2", "feature2"]),
        };
        (RunnableSequence.from as jest.Mock).mockReturnValue(mockChain);
    });

    test('return feature-list with duplicates removed', async () => {
        const text = "example text";
        const entities = ["entityA", "entityB"];
        const result = await analyzeFeatures(dummyModel, text, entities);
        expect(mockChain.invoke).toHaveBeenCalled();
        expect(result).toEqual(["feature1", "feature2"]);
    });

    test('handles empty entities list', async () => {
        const text = "example text";
        const entities: string[] = [];
        await analyzeFeatures(dummyModel, text, entities);
        expect(mockChain.invoke).toHaveBeenCalled();
        const invokeArgs = mockChain.invoke.mock.calls[0][0];
        expect(invokeArgs.entities).toBe("");
    });

    test('joins entities with proper delimiter', async () => {
        const text = "example text";
        const entities = ["A", "B", "C"];
        await analyzeFeatures(dummyModel, text, entities);
        const invokeArgs = mockChain.invoke.mock.calls[0][0];
        expect(invokeArgs.entities).toBe("A、B、C");
    });
});

describe('analyzeValues', () => {
    let mockChain: { invoke: jest.Mock };
    const dummyModel = {} as any;

    beforeEach(() => {
        mockChain = {
            invoke: jest.fn().mockResolvedValue([
                {
                    feature: "featureX",
                    values: [
                        { entity: "entityA", value: "12.34" },
                        { entity: "entityB", value: "0" }
                    ]
                }
            ]),
        };
        (RunnableSequence.from as jest.Mock).mockReturnValue(mockChain);
    });

    test('transform data and add the space', async () => {
        const text = "example text";
        const features = ["featureX"];
        const entities = ["entityA", "entityB"];
        const space = "exampleSpace";
        const result = await analyzeValues(dummyModel, text, features, entities, space);
        expect(mockChain.invoke).toHaveBeenCalled();
        expect(result).toEqual([
            {
                feature: "featureX",
                values: [
                    { entity: "entityA", value: 12.34 },
                    { entity: "entityB", value: 0 }
                ],
                space: "exampleSpace"
            }
        ]);
    });

    test('filters out invalid feature entries', async () => {
        mockChain.invoke.mockResolvedValueOnce([
            {
                feature: "",
                values: [{ entity: "entityA", value: "12.34" }]
            },
            {
                feature: "validFeature",
                values: []
            },
            {
                feature: "featureX",
                values: [{ entity: "entityA", value: undefined }]
            }
        ]);

        const result = await analyzeValues(dummyModel, "text", ["feature"], ["entity"], "space");
        expect(result).toEqual([]);
    });

    test('handles non-numeric values', async () => {
        mockChain.invoke.mockResolvedValueOnce([
            {
                feature: "featureX",
                values: [
                    { entity: "entityA", value: "invalid" },
                    { entity: "entityB", value: "123.45" }
                ]
            }
        ]);

        const result = await analyzeValues(dummyModel, "text", ["feature"], ["entity"], "space");
        expect(result[0].values).toEqual([
            { entity: "entityA", value: 0 },
            { entity: "entityB", value: 123.45 }
        ]);
    });
});
