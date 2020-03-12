import wx from "weixin-js-sdk";

export const urlSearchParam = key => {
  const params = new URLSearchParams(window.location.href.split("?")[1]);
  return params.get(key) || false;
};

export const isWx = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) == "micromessenger" ? true : false;
};

export const shareConfig = ({ title, desc, link, imgUrl }) => {
  wx.updateAppMessageShareData({
    title,
    desc,
    link,
    imgUrl
  });
  wx.updateTimelineShareData({
    title,
    desc,
    link,
    imgUrl
  });
};

export const compressImg = file => {
  return new Promise((resolve, reject) => {
    try {
      // 创建Canvas对象(画布)
      let canvas = document.createElement("canvas");
      // 获取对应的CanvasRenderingContext2D对象(画笔)
      let context = canvas.getContext("2d");
      // 创建新的图片对象
      let img = new Image();
      // 指定图片的DataURL(图片的base64编码数据)
      img.src = file.content;
      // 监听浏览器加载图片完成，然后进行绘制
      img.onload = function() {
        const width = 640;
        const height = this.height / (this.width / 640);
        // 指定canvas画布大小，该大小为最后生成图片的大小
        canvas.width = width;
        canvas.height = height;
        /* 如果不指定缩小的像素，图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后得到的图片就是张局部图。图片小于画布就会有黑边。*/
        context.drawImage(img, 0, 0, width, height);
        // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
        file.content = canvas.toDataURL(file.file.type, 0.65);
        resolve(file);
      };
    } catch (err) {
      reject(err);
    }
  });
};
