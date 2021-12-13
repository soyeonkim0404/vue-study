<template>
  <label
    :class="{
      checkedStyle: chkWeekday.some((el) => {
        return el === value;
      }),
    }"
  >
    <input
      type="checkbox"
      v-bind="$attrs"
      :value="value"
      :checked="
        chkWeekday.some((el) => {
          return el === value;
        })
      "
      @change="onChange(value)"
    />
    <span><slot></slot></span>
  </label>
</template>
<script>
export default {
  name: 'InputCheckbox',
  props: ['chkWeekday', 'value'],
  inheritAttrs: false,
  model: {
    prop: 'chkWeekday',
    event: 'checkCheck',
  },
  methods: {
    onChange(val) {
      const idx = this.chkWeekday.indexOf(val);
      if (idx === -1) {
        this.chkWeekday.push(val);
      } else {
        this.chkWeekday.splice(idx, 1);
      }
      this.$emit('checkCheck', this.chkWeekday);
    },
  },
};
</script>

<style scoped lang="scss">
.buttonStyle {
  position: relative;
  display: flex;
  width: 140px;
  height: 50px;
  padding: 15px 22px;
  box-sizing: border-box;
  border-radius: 25px;
  border: solid 1px #ffa8a8;
  justify-content: center;
  input {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    padding: 0;
    color: #ffa8a8;
  }
  &.checked {
    border: solid 1px #ff8787;
    background: #ff8787;
    span {
      color: #fff;
    }
  }
}
</style>
