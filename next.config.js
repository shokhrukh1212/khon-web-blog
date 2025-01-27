const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "shokhrukh1212",
        mongodb_password: "eXXB2DIMgmy6l3Cn",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "shokhrukh1212",
      mongodb_password: "eXXB2DIMgmy6l3Cn",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
