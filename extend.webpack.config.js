/// @ts-check
const { GuessPlugin } = require('guess-webpack');
const { parseAngularRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      reportProvider() {
        return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json').toString()));
      },
      routeProvider() {
        return Promise.resolve(parseAngularRoutes('tsconfig.json'));
      },
      runtime: {
        delegate: false
      },
    })
  ]
};
