module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**', '!**/coverage/**', '!**/*.config.js',
                        '!**/plugins/**', '!**/router/**', '!**/main.js']
}
