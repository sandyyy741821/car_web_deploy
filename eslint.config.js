export default [
    {
      ignores: ["node_modules/", "dist/"], 
    },
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module", 
        globals: {
          console: "readonly",
        },
      },
      rules: {
        "no-console": "off",
        "no-undef": "error",
        "semi": ["error", "always"],
      },
    },
  ];
  