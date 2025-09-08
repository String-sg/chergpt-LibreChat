const { EModelEndpoint } = require('librechat-data-provider');

/**
 * Loads custom config endpoints
 * @param {TCustomConfig} [config]
 * @param {TCustomConfig['endpoints']['agents']} [agentsDefaults]
 */
const loadEndpoints = (config) => {
  /** @type {AppConfig['endpoints']} */
  const loadedEndpoints = {};
  const endpoints = config?.endpoints;

  if (endpoints?.[EModelEndpoint.google]) {
    loadedEndpoints[EModelEndpoint.google] = endpoints[EModelEndpoint.google];
  }

  if (endpoints?.all) {
    loadedEndpoints.all = endpoints.all;
  }

  return loadedEndpoints;
};

module.exports = {
  loadEndpoints,
};
