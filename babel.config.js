module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["@babel/plugin-proposal-optional-chaining"],
    // rules: [
    //   {
    //     test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
    //     include: /node_modules/,
    //     exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
    //     loader: "babel-loader",
    //   },
    //   {
    //     test: /@?(ui-kitten|eva-design).*\.(ts|js)x?$/,
    //     loader: "babel-loader",
    //   },
    // ],
  };
};
