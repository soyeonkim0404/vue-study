<template>
  <span
    :class="{
      'form-input': true,
      disabled: disabled,
      focused: focused,
    }"
  >
    <input
      type="text"
      :value="value"
      v-on="listeners"
      v-bind="$attrs"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  </span>
</template>

<script>
export default {
  name: 'form-input',
  props: ['value', 'disabled', 'placeholder'],
  inheritAttrs: false,
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          this.$emit('input', event.target.value);
        },
        focusin: (event) => {
          this.focused = true;
          this.$emit('focusin', event);
        },
        focusout: (event) => {
          this.focused = false;
          this.$emit('focusout', event);
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
.form-input {
  display: block;
  margin-top: 12px;
  input {
    display: block;
    width: 100%;
    height: 60px;
    padding: 15px 30px;
    border-radius: 30px;
    border: none;
    background: #f5f5f5;
    color: #222;
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    box-sizing: border-box;
    vertical-align: middle;
    &:hover,
    &:focus {
      border: 1px solid #222;
      outline: none;
      box-shadow: 4px 6px 16px rgba(0, 0, 0, 0.08);
      background: #ffffff;
      color: #222;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #495057 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  &.disabled {
    input {
      background: rgba(0, 0, 0, 0.5);
      color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
