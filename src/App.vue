<template lang="pug">
  #app
    router-view
    footer.app-footer
      a.tech-support(href="http://wpa.qq.com/msgrd?v=3&uin=527087541&site=qq&menu=yes") 技术支持: 新蓝广传
      a.feedback(href="https://support.qq.com/product/1221")
        icon(iconClass="yijian")
        | 意见反馈
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="less">
#app {
  padding-bottom: 40px;
}
body {
  background-color: #fff;
  color: #333;
}
.app-footer {
  padding: 30px;
  text-align: center;
  a {
    // prettier-ignore
    font-size: 14PX;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    svg {
      margin-right: 5px;
    }
  }
}
p {
  margin: 0;
}
.van-cell {
  align-items: center;
  // prettier-ignore
  font-size: 16PX;
  &.van-field .van-cell__value {
    flex: 1;
    // prettier-ignore
    font-size: 14PX;
  }
  .van-cell__label {
    // prettier-ignore
    font-size: 12PX;
  }
  .van-cell__value {
    flex: 0;
    min-width: 20vw;
    // prettier-ignore
    font-size: 12PX;
  }
  .van-icon {
    display: flex;
    align-items: center;
    // prettier-ignore
    font-size: 18PX;
  }
}
</style>
