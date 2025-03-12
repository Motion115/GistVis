import { capitalizeFirstLetter } from './modules/visualizer/utils/utils';
import { generateFewShotExample } from './modules/llm/visKB';

// Function Tests
describe('Function Tests', () => {
  it('should capitalize the first letter', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  it('generateFewShotExample should return a string', () => {
    const result = generateFewShotExample('trend', 2, 1, false);
    expect(typeof result).toBe('string');
  });
});