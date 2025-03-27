# gist-wsv

## Testing

Run tests using one of the following commands:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test -- --watch

# Run tests with coverage
pnpm test -- --coverage

# Run a specific test file
pnpm test __tests__/<test_file_name>
```

### Test Suites

The test suites cover the following components:

1. Utility Functions (`utils.test.ts`):
   - String manipulation (capitalizeFirstLetter)
   - Type recommendation (recommendValidTypes)

2. Post-Processing (`postProcess.test.ts`):
   - Entity highlighting (getHighlightPos)
   - Entity deduplication (getUniqueEntities)
   - Overlap handling (getNonOverlappingEntities)
   - Text display processing (getProductionVisSpec)

3. Search Functions (`fuzzySearch.test.ts`):
   - Direct text matching
   - Fuzzy search capabilities

### Prerequisites

Before running tests, ensure you have installed dependencies:

```bash
pnpm install
```

### Test Coverage

To view detailed test coverage:

1. Run tests with coverage flag:
   ```bash
   pnpm test -- --coverage
   ```

2. Coverage report will show:
   - Line coverage
   - Branch coverage
   - Function coverage
   - Statement coverage

### Debugging Tests

To debug tests:

1. Run in watch mode:
   ```bash
   pnpm test -- --watch
   ```

2. Use Jest's interactive mode:
   - Press `f` to run only failed tests
   - Press `p` to filter by filename
   - Press `t` to filter by test name