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

    test('return space and breakdowns', async () => {
        mockChain.invoke.mockResolvedValueOnce([
            { space: 'countries', breakdowns: ['China', 'US'] },
            { space: 'tech fields', breakdowns: ['AI', '5G'] }
        ]);

        const result = await analyzeSpaceBreakdown(dummyModel, 'example text');
        
        expect(mockChain.invoke).toHaveBeenCalled();
        expect(result).toEqual([
            { space: 'countries', breakdowns: ['China', 'US'] },
            { space: 'tech fields', breakdowns: ['AI', '5G'] }
        ]);
    });

    test('merge when equal', async () => {
        mockChain.invoke.mockResolvedValueOnce([
            { space: 'country', breakdowns: ['China', 'US'] },
            { space: 'country', breakdowns: ['Japan', 'US'] },
            { space: 'tech', breakdowns: ['AI'] }
        ]);

        const result = await analyzeSpaceBreakdown(dummyModel, 'example text');
        
        expect(result).toEqual([
            { space: 'country', breakdowns: ['China', 'US', 'Japan'] },
            { space: 'tech', breakdowns: ['AI'] }
        ]);
    });

    test('deal with empty', async () => {
        mockChain.invoke.mockResolvedValueOnce([]);

        const result = await analyzeSpaceBreakdown(dummyModel, 'no entity');
        
        expect(result).toEqual([]);
    });

    test('duplicate removal', async () => {
        mockChain.invoke.mockResolvedValueOnce([
            { space: 'category', breakdowns: ['A', 'B', 'B', 'A'] }
        ]);

        const result = await analyzeSpaceBreakdown(dummyModel, 'example text');
        
        expect(result).toEqual([
            { space: 'category', breakdowns: ['A', 'B'] }
        ]);
    });

    test('model calling', async () => {
        mockChain.invoke.mockResolvedValueOnce([]);
        await analyzeSpaceBreakdown(dummyModel, 'example text');

        const invokeArgs = mockChain.invoke.mock.calls[0][0];
        expect(invokeArgs).toHaveProperty('text', 'example text');
        expect(invokeArgs).toHaveProperty('format_instructions');
        expect(invokeArgs).toHaveProperty('exampleOutput');
        expect(invokeArgs.exampleOutput).toContain('"space":');
        expect(invokeArgs.exampleOutput).toContain('"breakdowns":');
    });
});
