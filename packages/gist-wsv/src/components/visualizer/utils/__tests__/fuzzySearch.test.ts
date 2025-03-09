import { fuzzySearch } from '../fuzzySearch';

describe('fuzzySearch', () => {
  describe('Direct matching (isFuzzy=false)', () => {
    it('finds exact matches with word boundaries', () => {
      const result = fuzzySearch('test', 'This is a test case', false);
      expect(result).toEqual([[10, 14]]);
    });

    it('finds case-insensitive matches', () => {
      const result = fuzzySearch('TEST', 'This is a test case', false);
      expect(result).toEqual([[10, 14]]);
    });

    it('handles special characters correctly', () => {
      const result = fuzzySearch('test.com', 'Visit test.com website', false);
      expect(result).toEqual([[6, 14]]);
    });

    it('finds multiple occurrences', () => {
      const result = fuzzySearch('test', 'test this test case test', false);
      expect(result).toEqual([[0, 4], [10, 14], [20, 24]]);
    });

    it('returns empty array when no matches found', () => {
      const result = fuzzySearch('xyz', 'test this test case', false);
      expect(result).toEqual([]);
    });
  });

  describe('Fuzzy matching (isFuzzy=true)', () => {
    it('finds close matches', () => {
      const result = fuzzySearch('tst', 'This is a test case', true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('handles long text with multiple potential matches', () => {
      const context = 'The percentage of the sales of BYD is 30%, while the rest of the top 5 companies only consist of 25%. BYD';
      const query = 'the rest of the top 5 companies';
      const result = fuzzySearch(query, context, true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('handles partial matches', () => {
      const result = fuzzySearch('cmpny', 'This company is good', true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('returns empty array for very different strings', () => {
      const result = fuzzySearch('xyzabc', 'test this test case', true);
      expect(result).toEqual([]);
    });

    it('finds best match based on length difference', () => {
      const context = 'The company profit increased by 25%';
      const query = 'profit';
      const result = fuzzySearch(query, context, true);
      // Should find 'profit' and not include partial matches
      expect(result.length).toBe(1);
    });
  });
});