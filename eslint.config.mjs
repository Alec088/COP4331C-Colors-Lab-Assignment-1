import js from "@eslint/js";
import globals from "globals";

export default [
	{
		// md5.js is a vendored third-party library (blueimp/JavaScript-MD5)
		ignores: ["node_modules/**", "LAMP Stack/public/js/md5.js"],
	},
	js.configs.recommended,
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "script",
			globals: {
				...globals.browser,
			},
		},
		rules: {
			// Functions are called from inline onclick handlers in the HTML,
			// so ESLint cannot see their usages.
			"no-unused-vars": ["error", { varsIgnorePattern: "^(doLogin|doLogout|addColor|searchColor|readCookie)$" }],
			eqeqeq: "error",
			"no-var": "error",
			"prefer-const": "error",
		},
	},
];
