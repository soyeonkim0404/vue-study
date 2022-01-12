<template>
  <label
    :class="{
      'input-checkbox': true,
      'all-check': allCheck,
      checked: checkedEvt,
    }"
  >
    <input
      type="checkbox"
      :checked="checkedEvt"
      :disabled="disabled"
      v-on="listeners"
    />
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'input-checkbox',
  props: ['checked', 'disabled', 'value'],
  model: {
    prop: 'checked',
    event: 'change',
  },
  data() {
    return {
      allCheck: false,
    };
  },
  computed: {
    checkboxType() {
      return typeof this.checked === 'boolean';
    },
    checkedEvt() {
      if (this.checkboxType) {
        return this.checked;
      }
      return this.checked.some((el) => el === this.value);
    },
    listeners() {
      return {
        change: (event) => {
          if (this.checkboxType) {
            this.$emit('checkChange', event.target.checked);
          } else {
            const idx = this.checked.indexOf(this.value);
            if (idx === -1) {
              this.checked.push(this.value);
            } else {
              this.checked.splice(idx, 1);
            }
            this.$emit('checkChange', this.checked);
          }
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
.input-checkbox {
  position: relative;
  display: flex;
  width: 50px;
  height: 50px;
  padding: 15px 22px;
  box-sizing: border-box;
  border: solid 1px #ffa8a8;
  border-left: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }
  span {
    font-size: 16px;
    padding: 0;
    color: #ffa8a8;
  }
  &.checked {
    border: solid 1px #ff8787;
    border-left: none;
    background: #ffa8a8;
    span {
      color: #fff;
    }
  }
}
</style>
