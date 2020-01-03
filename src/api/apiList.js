import methods from "./index";
import userModule from "./user";

const sortOutModule = (modules, header) => {
  const api = {};
  modules.forEach(u => {
    api[u.moduleName] = params => {
      return methods[u.method](
        u.moduleName,
        u.url,
        params,
        header,
        u.needLoading,
        u.needMsg
      );
    };
  });
  return api;
};

const user = sortOutModule(userModule.modules, userModule.header);

export default {
  user
};
