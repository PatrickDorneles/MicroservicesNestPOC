module.exports = {
	"env": {
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"import-helpers"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"import-helpers/order-imports": [
			"warn",
			{
				newlinesBetween: "always", // new line between groups
				groups: [
					"/^@nestjs/",
					"module",
					["parent", "sibling", "index"],
				],
				alphabetize: { order: "asc", ignoreCase: true },
			},
		],
	}
}
