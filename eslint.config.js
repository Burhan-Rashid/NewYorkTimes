import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // ✅ Auto-detect React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // ✅ Fix: No need to import React in JSX
      "react/jsx-uses-react": "off", // ✅ Prevents React import requirement
      "react/jsx-uses-vars": "warn",
      "no-unused-vars": "warn",
    },
  },
];
