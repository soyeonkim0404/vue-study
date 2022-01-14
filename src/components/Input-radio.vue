<template>
  <label :class="{ 'input-radio': true, checked: val === childValue }">
    <input
      type="radio"
      v-bind="$attrs"
      :name="name"
      :value="val"
      @change="onChange"
    />
    <template>
      <i class="icon"></i>
    </template>
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'InputRadio',
  props: ['childValue', 'val', 'name'],
  inheritAttrs: false,
  model: {
    prop: 'childValue',
    event: 'change',
  },
  methods: {
    onChange() {
      console.log(this.val);
      this.$emit('change', this.val);
    },
  },
};
</script>

<style scoped lang="scss">
.input-radio {
  position: relative;
  padding-left: 26px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 0;
    display: inline-block;
    transform: translateY(-50%);
    margin-right: 8px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px auto;
    background-image: url('../assets/images/radio-off.png');
  }
  span {
    color: #fff;
  }
  &.checked {
    .icon {
      background-image: url('../assets/images/radio-on.png');
    }
  }
  &.disabled {
    span {
    }
  }
}
</style>
