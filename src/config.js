module.exports = {
  project: "potato-tpl-for-mobile", // 项目名称
  ip: "", // 开发运行地址
  port: 8088, // 开发运行端口
  staticHost: "", // 静态资源路径
  serverHost: "", // 线上地址
  apiHost: process.env.NODE_ENV === "development" ? "/api" : "/api", // api地址
  ssoHost: "http://dev.xinlantech.com/ssoServer/api/", // 单点登录认证解析地址
  uploadHost: "http://dev.xinlantech.com/imgServer/api/upload", // 上传地址
  publicPath: "", // 二级目录地址
  share: {
    // 微信分享用
    title: "",
    desc: "",
    icon: ""
  }
};
