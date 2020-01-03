<template lang="pug">
  van-dialog.prompt(use-slot, :title="`填写${item}`", v-model="show", confirmButtonColor="#1989fa", show-cancel-button, :before-close="beforeClose")
    van-field.prompt-field(v-model="value", :placeholder="`请输入${item}`", autofocus, clearable, clickable, type="tel", maxlength="11")
</template>

<script>
export default {
  name: "Prompt",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    beforeClose(action, done) {
      done(false);
      if (action === "cancel") return this.$emit("onCancel");
      if (!this.value) return this.$toast(`请输入${this.item}`);
      this.$emit("onConfirm", this.value);
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    item: {
      type: String,
      default: "内容"
    }
  }
};
</script>

<style lang="less">
.prompt {
  .prompt-field {
    margin: 20px 0;
  }
}
</style>
