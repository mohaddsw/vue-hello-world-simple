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
        padding: "10px 25px",
        outline: "none",
        cursor: "pointer",
        border: "1px solid rgb(126, 125, 125)",
        borderRadius: "2px",
      },
    };
  },
};
</script>

<style scoped>
button {
  padding: 10px 25px;
  outline: none;
  cursor: pointer;
  border: 1px solid rgb(126, 125, 125);
  border-radius: 2px;
}
button:hover {
  background: linear-gradient(0, rgb(126, 125, 125), rgb(126, 125, 125));
  color: #fff;
}
</style>
