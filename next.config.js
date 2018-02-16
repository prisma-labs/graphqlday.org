const path = require("path");

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
    "/code-of-conduct": { page: "/code-of-conduct" },
    "/imprint": { page: "/imprint" },
    "/team": { page: "/team" }
  }),

  // Custom Webpack config
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
    }
    return config;
  }
};
