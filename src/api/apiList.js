import methods from "./index";

let moduleArr = [];
let apis = {};

const files = require.context("@/api/modules", false, /.js$/);
files.keys().forEach(file => {
  moduleArr.push(files(file).default);
});

const sortOutModule = (modules, header) => {
  const api = {};
  modules.forEach(u => {
    api[u.moduleName] = (params = {}) => {
      return methods[u.method](
        u.moduleName,
        u.url,
        Object.assign(params, u.params),
        header,
        u.needLoading,
        u.needMsg
      );
    };
  });
  return api;
};

moduleArr.forEach(arr => {
  arr.name && (apis[arr.name] = sortOutModule(arr.modules, arr.header));
});

export default apis;
