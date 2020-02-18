import axios from "./axios";
import Toast from "vant/lib/toast";
import "vant/lib/toast/style";

Toast.allowMultiple();
const LoadingOptions = {
  type: "loading",
  message: "加载中...",
  forbidClick: true,
  duration: 0
};
let loading;
let instance = axios();

const methods = {};
const states = {};

["get", "post", "delete", "put"].forEach(type => {
  methods[type] = (
    moduleName,
    url,
    params,
    headers,
    needLoading = false,
    needMsg = false
  ) => {
    // 防止同个接口重复提交
    if (states[moduleName] === "pending") return false;
    states[moduleName] = "pending";

    if (needLoading) loading = Toast.loading(LoadingOptions);
    let options = Object.create(null);
    if (params && (type == "get" || type == "delete")) options.params = params;
    if (headers) options.headers = headers;

    return new Promise((resolve, reject) => {
      (type == "get" || type == "delete"
        ? instance[type](url, options)
        : instance[type](url, params, options)
      )
        .then(({ state, msg, data }) => {
          states[moduleName] = "ready";
          if (needLoading) loading.clear();
          if (!state) return Toast.fail(msg), reject(msg);
          if (needMsg) Toast.success(msg);
          resolve(data);
        })
        .catch(err => {
          states[moduleName] = "ready";
          if (needLoading) loading.clear();
          Toast.fail(err.msg);
          reject(err);
        });
    });
  };
});

export default methods;
