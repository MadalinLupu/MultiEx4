module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Expo Router nécessite ce plugin
      require.resolve('expo-router/babel'),
    ],
  };
};
