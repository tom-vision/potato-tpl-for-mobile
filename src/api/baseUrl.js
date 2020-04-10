import config from "../config";

let baseUrl = "";

switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = "/testApi";
    break;
  case "production":
    baseUrl = config.apiHost;
    break;
}

export { baseUrl };
