const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    env.mode = "development";
    const config = await createExpoWebpackConfigAsync(env, Object.assign({}, argv));
    // Customize the config before returning it.
    return config;
}