let baseUrl = ""; // 本地代理

switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = "http://localhost:8080"; // 测试环境url
    break;
  case "production":
    baseUrl = "https://hyv.wifizs.cn/"; // 发布环境url
    break;
}

export { baseUrl };
