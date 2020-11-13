const modules = [
  {
    moduleName: "getUserInfo",
    method: "get",
    url: "/api/userInfo",
    needLoading: true,
    needMsg: true,
    needCache: true
  }
];

const header = {};

export default {
  modules,
  header
};
