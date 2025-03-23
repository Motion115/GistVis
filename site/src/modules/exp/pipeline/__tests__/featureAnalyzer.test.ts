import { analyzeFeatures, analyzeValues } from '../featureAnalyzer';
import { RunnableSequence } from '@langchain/core/runnables';

jest.mock('@langchain/core/runnables', () => ({
    RunnableSequence: {
        from: jest.fn(),
    },
}));

describe('analyzeFeatures', () => {
    let mockChain: { invoke: jest.Mock };
    const dummyModel = {} as any;

    beforeEach(() => {
        mockChain = {
            invoke: jest.fn().mockResolvedValue(["feature1", "feature2", "feature2"]),
        };
        (RunnableSequence.from as jest.Mock).mockReturnValue(mockChain);
    });

    test('return feature-list', async () => {
        const text = "example text";
        const entities = ["entityA", "entityB"];
        const result = await analyzeFeatures(dummyModel, text, entities);
        expect(mockChain.invoke).toHaveBeenCalled();
        expect(result).toEqual(["feature1", "feature2"]);
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
});
