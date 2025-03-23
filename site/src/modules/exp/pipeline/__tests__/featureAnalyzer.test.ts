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

    test('返回不重复的特征列表', async () => {
        const text = "示例文本";
        const entities = ["实体A", "实体B"];
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
                        { entity: "实体A", value: "12.34" },
                        { entity: "实体B", value: "0" }
                    ]
                }
            ]),
        };
        (RunnableSequence.from as jest.Mock).mockReturnValue(mockChain);
    });

    test('转换数据值并添加 space 字段', async () => {
        const text = "示例文本";
        const features = ["featureX"];
        const entities = ["实体A", "实体B"];
        const space = "测试空间";
        const result = await analyzeValues(dummyModel, text, features, entities, space);
        expect(mockChain.invoke).toHaveBeenCalled();
        expect(result).toEqual([
            {
                feature: "featureX",
                values: [
                    { entity: "实体A", value: 12.34 },
                    { entity: "实体B", value: 0 }
                ],
                space: "测试空间"
            }
        ]);
    });
});
