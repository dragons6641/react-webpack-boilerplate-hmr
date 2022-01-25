const webpackMerge = require("webpack-merge");

const buildValidations = require("./build-utils/build-validations");
const commonConfig = require("./build-utils/webpack.common");

const addons = (addonsArg) => {
  let addons = [...[addonsArg]].filter(Boolean);

  return addons.map((addonName) =>
    require(`./build-utils/addons/webpack.${addonName}.js`)
  );
};

module.exports = (env) => {
  if (!env.env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  const mergedConfig = webpackMerge.merge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  );

  return mergedConfig;
};
