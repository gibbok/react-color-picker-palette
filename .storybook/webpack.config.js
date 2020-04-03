const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
    ],
    exclude:[
      path.resolve(__dirname, "./cypress")
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
