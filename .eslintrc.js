module.exports = {
  extends: [
    "standard-with-typescript",
    "next/core-web-vitals"
  ],
  parserOptions: {
    project: "tsconfig.eslint.json"
  },
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-mixed-spaces-and-tabs": 0, // disable rule
    "no-tabs": ["error", { "allowIndentationTabs": true }]
  }
}
