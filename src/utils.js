export const urlSearchParam = key => {
  const params = new URLSearchParams(window.location.href.split("?")[1]);
  return params.get(key) || false;
};

export const isWx = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) == "micromessenger" ? true : false;
};
