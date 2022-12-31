module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	parser: "@typescript-eslint/parser",
	plugins: [`@typescript-eslint`, `prettier`, `unicorn`, `jsx-a11y`, `import`],
	extends: [
		`next/core-web-vitals`,
		`plugin:@typescript-eslint/eslint-recommended`,
		`plugin:@typescript-eslint/recommended`,
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		`plugin:unicorn/recommended`,
		`plugin:jsx-a11y/recommended`,
		`plugin:import/recommended`,
		`plugin:import/typescript`,
		`prettier/@typescript-eslint`,
    `plugin:prettier/recommended`,
	],
	parserOptions: {
		project: `./tsconfig.json`,
		ecmaVersion: 2022,
	},
	rules: {
		"prettier/prettier": `error`,
    "indent": [2, 2, { SwitchCase: 1 }],
		"@typescript-eslint/explicit-module-boundary-types": `off`,
		"react-hooks/exhaustive-deps": `off`,
		"unicorn/filename-case": [
			`error`,
			{
				case: `kebabCase`,
			},
		],
		"import/no-extraneous-dependencies": `off`,
		"react/no-unescaped-entities": `off`,
		"unicorn/no-null": `off`,
		"no-implied-eval": `off`,
		"@typescript-eslint/no-implied-eval": `off`,
		"unicorn/no-array-reduce": `off`,
		"unicorn/no-for-loop": `off`,
		"unicorn/no-array-callback-reference": `off`,
		"default-case": `off`,
		"no-restricted-syntax": `off`,
		"no-secrets/no-secrets": `off`,
		"unicorn/no-array-for-each": `off`,
		"unicorn/no-array-push-push": `off`,
		"unicorn/prefer-module": `off`,
		"unicorn/no-nested-ternary": `off`,
		"unicorn/prevent-abbreviations": `off`,
		"unicorn/numeric-separators-style": `off`,
		"unicorn/no-new-array": `off`,
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"react/no-unknown-property": ["error", { ignore: ["tw", "css"] }],
	},
};
