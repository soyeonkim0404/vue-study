<template>
  <label :class="{ chked: val === value }">
    <input
      type="radio"
      v-bind="$attrs"
      :name="name"
      :value="val"
      @change="onChange"
    />
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'InputRadio',
  props: ['value', 'val', 'name'],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change',
  },
  methods: {
    onChange() {
      this.$emit('change', this.val);
    },
  },
};
</script>

<style scoped lang="scss">
.input-radio {
  display: flex;
  li {
    flex-basis: auto;
    box-sizing: border-box;
    & + li {
      margin-left: 50px;
    }
  }
}

label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  input {
    width: 40px;
    height: 40px;
  }
  span {
    font-size: 2.5rem;
    padding-left: 10px;
  }
  &.chked {
    background: yellow;
  }
}

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
  &.chked {
    border: solid 1px #ff8787;
    background: #ff8787;
    span {
      color: #fff;
    }
  }
}
</style>
