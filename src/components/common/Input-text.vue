<template>
  <span :class="{ 'input-text': true, disabled: disabled }">
    <input
      type="text"
      :value="value"
      v-on="listeners"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  </span>
</template>

<script>
export default {
  name: 'InputText',
  props: ['value', 'disabled', 'placeholder'],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => {
          this.$emit('input', event.target.value);
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
.input-text {
  display: block;
  input {
    display: inline-block;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    margin: 0;
    box-sizing: border-box;
    vertical-align: middle;
    border-radius: 10px;
    border: none;
    background: #495057;
    color: #fff;
    font-size: 1.2rem;
    &:hover,
    &:focus {
      border: none;
      outline: none;
      box-shadow: 0 5px 16px rgba(97, 97, 97, 0.5);
      background: #495057;
      color: #fff;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #495057 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  &.searchIsBtn {
    display: inline-flex;
    width: 86%;
  }
  &.disabled {
    input {
      background: rgba(0, 0, 0, 0.5);
      color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
