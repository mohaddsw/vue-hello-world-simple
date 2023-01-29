<template>
  <button :style="styles">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#fff",
      required: false,
    },
  },
  data() {
    return {
      styles: {
        backgroundColor: this.color,
        borderRadius: "2px",
        padding: "10px 25px",
        outline: "none",
        cursor: "pointer",
        border: "1px solid rgb(126, 125, 125)",
      },
    };
  },
  mounted() {
    console.log(this.styles);
  },
};
</script>

<style scoped>
button:hover {
  background: linear-gradient(0, rgb(126, 125, 125), rgb(126, 125, 125));
  color: #fff;
}
</style>
