import { analyzeSpaceBreakdown } from '../spaceAnalyzer';
import { RunnableSequence } from '@langchain/core/runnables';

jest.mock('@langchain/core/runnables', () => ({
    RunnableSequence: {
        from: jest.fn(),
    },
}));

describe('analyzeSpaceBreakdown', () => {
    const validText = '示例输入文本';
    const mockResult = [
        { space: 'countries', breakdowns: ['China', 'US'] },
        { space: 'tech fields', breakdowns: ['AI', '5G'] }
    ];
    let mockChain: { invoke: jest.Mock };

    beforeEach(() => {
        mockChain = {
            invoke: jest.fn().mockResolvedValue(mockResult),
        };
        (RunnableSequence.from as jest.Mock).mockReturnValue(mockChain);
    });

    test('return model reply', async () => {
        const result = await analyzeSpaceBreakdown({} as any, validText);
        expect(mockChain.invoke).toHaveBeenCalled();
        expect(result).toEqual(mockResult);
    });
});
