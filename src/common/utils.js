export default {
  serverAddress:
    process.env.NODE_ENV == "development"
      ? "http://localhost:3004"
      : "/activity",
  urlSearchParam({ url = window.location.href, key }) {
    const params = new URLSearchParams(url.split("?")[1]);
    return params.get(key);
  }
};
