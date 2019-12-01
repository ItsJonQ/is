const jestConfig = require('@itsjonq/zero/jest');

module.exports = Object.assign(jestConfig, {
	testEnvironment: 'jsdom',
});
