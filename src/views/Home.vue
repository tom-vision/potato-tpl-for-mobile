<template lang="pug">
  .home
    icon(iconClass="send-s")
    | Hello Potato!
</template>

<script>
export default {
  name: "home",
  async created() {}
};
</script>

<style lang="less">
.home {
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
}
</style>
