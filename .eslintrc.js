/**
 * -----------------------------------------------------
 * NOTES ON CONFIGURATION STRUCTURE
 * -----------------------------------------------------
 *
 * Out of the box, ESLint does not support TypeScript or HTML. Naturally those are the two
 * main file types we care about in Angular projects, so we have to do a little extra work
 * to configure ESLint exactly how we need to.
 *
 * Fortunately, ESLint gives us an "overrides" configuration option which allows us to set
 * different lint tooling (parser, plugins, rules etc) for different file types, which is
 * critical because our .ts files require a different parser and different rules to our
 * .html (and our inline Component) templates.
 */
// eslint-disable-next-line filenames/match-regex,no-undef
module.exports = {
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: "commonjs", // Allows for the use of imports
		project: 'tsconfig.json',
		createDefaultProgram: true,
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	extends: [
		'eslint-config-prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
		'plugin:prettier/recommended',
		"plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	'plugins': ['filenames'],
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		'prettier/prettier': 'error',
		'strict': 'error',
		'max-len': ['error', {'code': 140}],
		'prefer-const': 'warn',
		'no-unused-expressions': 'warn',
		'no-unused-labels': 'warn',
		'no-unused-vars': 'warn',
		'@typescript-eslint/typedef': 'warn',
		'no-irregular-whitespace': 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		/**
		 * Any TypeScript related rules you wish to use/reconfigure over and above the
		 * recommended set provided by the @angular-eslint project would go here.
		 *
		 * There are some examples below from the @angular-eslint plugin and ESLint core:
		 */
		'quotes': [
			'error',
			'backtick',
			{'allowTemplateLiterals': true, 'avoidEscape': true}
		],
		'filenames/match-regex': [
			2,
			'^([a-zA-Z][a-zA-Z0-9]*(\\-?))+(\\.?)(.*)$',
			true
		],
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': 'allow-with-description',
				'ts-nocheck': 'allow-with-description',
				'ts-check': 'allow-with-description',
				'minimumDescriptionLength': 15
			}
		],
		"max-lines": [
			'warn',
			{
				'max': 100,
				'skipBlankLines': true,
				'skipComments': true,
			}
		],
		"no-multiple-empty-lines": [
			"error",
			{
				'max': 2,
				'maxEOF': 1,
				'maxBOF': 1,
			}
		],
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unsafe-member-access": "off"
	}
};