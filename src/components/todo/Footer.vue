<template>
  <div class="clearAllContainer" @click="clearTodo">
    <span class="clearAllBtn">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit('removeAll');
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  display: flex;
  justify-content: right;
  background: #f1f3f5;
  padding: 0 20px 40px 20px;
}

.clearAllBtn {
  width: 100px;
  color: #ced4da;
  cursor: pointer;
  text-align: right;
}
</style>
