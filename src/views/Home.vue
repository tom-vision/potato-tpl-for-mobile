<template lang="pug">
  .home
    icon(iconClass="send-s")
    | Hello Potato!
</template>

<script>
export default {
  name: "home",
  async created() {
    // 调用api模块
    const data = await this.$api.user.getUserInfo({
      id: 1
    });
  }
};
</script>

<style lang="less">
.home {
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
}
</style>
