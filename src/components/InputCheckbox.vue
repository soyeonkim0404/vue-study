<template>
  <ul class="input-checkbox">
    <li v-for="(item, index) in items" :key="index">
      <label :for="item.value" :class="{ checked: item.value === chkVal }">
        <input
          type="checkbox"
          :value="item.value"
          v-bind="$attrs"
          @change="onChange(item.value)"
        />
        <i class="icon"></i>
        <span>{{ item.label }}</span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'InputCheckbox',
  props: ['items'],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return {
      chkVal: [],
    };
  },
  methods: {
    onChange(val) {
      this.$emit('change', val);
    },
  },
};
</script>

<style scoped></style>
