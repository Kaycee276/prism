import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  // Next needs `jsx: preserve`; Vitest renders React trees in tests, so use the
  // automatic runtime when transforming .tsx here.
  oxc: { jsx: "automatic" },
  test: {
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "text-summary", "lcov", "json-summary"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
