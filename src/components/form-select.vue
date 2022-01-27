<template>
  <span
    :class="{
      'select-wrap': true,
      disabled: disabled,
    }"
  >
    <select
      :name="name"
      v-on="listeners"
      :value="value"
      :class="{
        placeholderStyle: value === placeholder,
      }"
      :disabled="disabled"
    >
      <option v-if="placeholder" disabled>
        {{ placeholder }}
      </option>
      <option v-for="(item, index) in options" :value="item.value" :key="index">
        {{ item.label }}
      </option>
    </select>
  </span>
</template>

<script>
export default {
  name: 'form-select',
  props: ['placeholder', 'options', 'name', 'value', 'disabled'],
  model: {
    prop: 'value',
    event: 'change',
  },
  created() {
    if (!this.options.some((el) => el.value === this.value)) {
      this.$emit('change', this.placeholder);
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: (event) => {
          this.$emit('change', event.target.value);
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
.select-wrap {
  position: relative;
  select {
    position: relative;
    width: 100%;
    height: 44px;
    padding: 0 47px 0 15px;
    min-width: auto;
    border-radius: 10px;
    font-size: 14px;
    line-height: 20px;
    outline: none !important;
    background: #495057;
    color: #fff;
    border: none;
    appearance: none;
    &.placeholderStyle {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    display: block;
    top: 50%;
    right: 15px;
    width: 15px;
    height: 15px;
    background-image: url('../assets/images/arrow-down.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 15px auto;
    transform: translateY(-50%);
  }
  &.disabled {
    select {
      background: rgba(0, 0, 0, 0.5);
      color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
