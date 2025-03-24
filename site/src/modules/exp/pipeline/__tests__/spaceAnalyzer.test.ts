import { analyzeSpaceBreakdown } from '../spaceAnalyzer';
import { RunnableSequence } from '@langchain/core/runnables';

jest.mock('@langchain/core/runnables', () => ({
    RunnableSequence: {
        from: jest.fn(),
    },
}));

describe('analyzeSpaceBreakdown', () => {
    let mockChain: { invoke: jest.Mock };
    const dummyModel = {} as any;

    beforeEach(() => {
        mockChain = {
            invoke: jest.fn(),
        };
        (RunnableSequence.from as jest.Mock).mockReturnValue(mockChain);
    });

    test('基本功能：返回空间和分类', async () => {
        mockChain.invoke.mockResolvedValueOnce([
            { space: 'countries', breakdowns: ['China', 'US'] },
            { space: 'tech fields', breakdowns: ['AI', '5G'] }
        ]);

        const result = await analyzeSpaceBreakdown(dummyModel, '示例文本');
        
        expect(mockChain.invoke).toHaveBeenCalled();
        expect(result).toEqual([
            { space: 'countries', breakdowns: ['China', 'US'] },
            { space: 'tech fields', breakdowns: ['AI', '5G'] }
        ]);
    });

    test('合并相同空间的分类', async () => {
        mockChain.invoke.mockResolvedValueOnce([
            { space: 'country', breakdowns: ['China', 'US'] },
            { space: 'country', breakdowns: ['Japan', 'US'] },
            { space: 'tech', breakdowns: ['AI'] }
        ]);

        const result = await analyzeSpaceBreakdown(dummyModel, '示例文本');
        
        expect(result).toEqual([
            { space: 'country', breakdowns: ['China', 'US', 'Japan'] },
            { space: 'tech', breakdowns: ['AI'] }
        ]);
    });

    test('处理空结果', async () => {
        mockChain.invoke.mockResolvedValueOnce([]);

        const result = await analyzeSpaceBreakdown(dummyModel, '无相关实体的文本');
        
        expect(result).toEqual([]);
    });

    test('去重相同的分类项', async () => {
        mockChain.invoke.mockResolvedValueOnce([
            { space: 'category', breakdowns: ['A', 'B', 'B', 'A'] }
        ]);

        const result = await analyzeSpaceBreakdown(dummyModel, '示例文本');
        
        expect(result).toEqual([
            { space: 'category', breakdowns: ['A', 'B'] }
        ]);
    });

    test('模型调用参数格式正确', async () => {
        mockChain.invoke.mockResolvedValueOnce([]);
        await analyzeSpaceBreakdown(dummyModel, '测试文本');

        const invokeArgs = mockChain.invoke.mock.calls[0][0];
        expect(invokeArgs).toHaveProperty('text', '测试文本');
        expect(invokeArgs).toHaveProperty('format_instructions');
        expect(invokeArgs).toHaveProperty('exampleOutput');
        expect(invokeArgs.exampleOutput).toContain('"space":');
        expect(invokeArgs.exampleOutput).toContain('"breakdowns":');
    });
});
