<template>
  <label
    :class="{
      checkedStyle: checked,
    }"
  >
    <input
      type="checkbox"
      v-bind="$attrs"
      :value="value"
      :chkWeekday="checked"
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
    event: 'checkEvt',
  },
  computed: {
    checked() {
      return this.chkWeekday.some((el) => el === this.value);
    },
  },
  methods: {
    onChange(val) {
      const idx = this.chkWeekday.indexOf(val);
      if (idx === -1) {
        this.chkWeekday.push(val);
      } else {
        this.chkWeekday.splice(idx, 1);
      }
      this.$emit('checkEvt', this.chkWeekday);
    },
  },
};
</script>

<style scoped lang="scss">
.buttonStyle {
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
    left: -9999px;
    opacity: 0;
  }
  span {
    font-size: 16px;
    padding: 0;
    color: #ffa8a8;
  }
  &.checkedStyle {
    border: solid 1px #ff8787;
    background: #ff8787;
    span {
      color: #fff;
    }
  }
}
</style>
