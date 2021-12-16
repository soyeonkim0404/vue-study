<template>
  <label
    :class="{
      checkedStyle: checkedEvt,
    }"
  >
    <input
      type="checkbox"
      v-bind="$attrs"
      :checked="checked"
      @change="onChange"
      :value="value"
    />
    <span><slot></slot></span>
  </label>
</template>
<script>
export default {
  name: 'InputCheckbox',
  props: ['checked', 'value'],
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'checkChange',
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
  },
  methods: {
    onChange(e) {
      if (this.checkboxType) {
        //console.log(e.target.checked);
        this.$emit('checkChange', e.target.checked);
      } else {
        //console.log(this.checked);
        const idx = this.checked.indexOf(this.value);
        if (idx === -1) {
          this.checked.push(this.value);
        } else {
          this.checked.splice(idx, 1);
        }
        this.$emit('checkChange', this.checked);
      }
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
