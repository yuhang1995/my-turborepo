const withTM = require("next-transpile-modules")(["@vj-feat/hooks"]);

module.exports = withTM({
    reactStrictMode: true,
});