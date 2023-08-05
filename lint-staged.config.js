// command to lint and fix files and also run prettier

module.exports = {
	'**/*.(jsx|js)': (filenames) => [
		`npx eslint --fix ${filenames.join(' ')}`,
		`npx prettier --write ${filenames.join(' ')}`,
	],

	'*.{css,scss,less,md}': (filenames) =>
		`npx prettier --write ${filenames.join(' ')}`,
};
