import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'gist-wsv', // Name of your package
  entry: ['src/index.ts'], // Entry point of your library
  format: ['cjs', 'esm'], // Output formats: CommonJS and ES modules
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'], // Prevents bundling React
});