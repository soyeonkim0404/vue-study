<template>
  <label>
    <input type="checkbox" @change="changeEventFn" />
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'InputAllCheckbox',
  props: ['value', 'weekDay', 'item'],
  model: {
    prop: 'value',
    event: 'change',
  },
  methods: {
    changeEventFn() {
      this.$emit('change', this.value);
    },
  },
};
</script>

<style scoped></style>
