<template>
  <button
      :class="{
      array: true,
    }"
      type="button"
      @click="$emit('clickChangeBtn')"
  >
    {{ this.item.val }}
  </button>
</template>

<script>
export default {
  name: 'listBtn',
  props: ['item'],
};
</script>

<style scoped>
.array {
  display: block;
  width: 240px;
  text-align: center;
  background: #ffe3e3;
  height: 40px;
}

.array + .array {
  margin-top: 10px;
}

.array:hover {
  background-color: #ffc9c9;
}
</style>
