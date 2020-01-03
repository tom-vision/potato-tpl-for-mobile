<template lang="pug">
  #app
    router-view
    a.tech-support(href="http://wpa.qq.com/msgrd?v=3&uin=527087541&site=qq&menu=yes") 技术支持: 新蓝广传
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
body {
  background-color: #fff;
  color: #333;
}
.tech-support {
  // prettier-ignore
  font-size: 14PX;
  color: #666;
  display: block;
  text-align: center;
  padding: 30px 0;
}
p {
  margin: 0;
}
</style>
