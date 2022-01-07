<template>
  <span :class="`icon-${this.type}`">
    <font-awesome-icon icon="angle-double-up" />
  </span>
</template>

<script>
export default {
  name: 'arrowBtn',
  props: ['type'],
};
</script>

<style scoped></style>
