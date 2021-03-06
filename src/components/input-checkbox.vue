<template>
  <label
    :class="{
      'input-checkbox': true,
      'all-check': allCheck,
      checked: checkedEvt,
      disabled: disabled || dataDisabled,
    }"
  >
    <input
      type="checkbox"
      :checked="checkedEvt"
      :disabled="disabled || dataDisabled"
      v-bind="$attrs"
      v-on="listeners"
    />
    <template>
      <i class="icon"></i>
    </template>
    <span><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'input-checkbox',
  inheritAttrs: false,
  props: {
    checked: {
      type: [Boolean, Array],
    },
    disabled: Boolean,
    value: String,
    dataDisabled: Boolean, //data에서 내려준 disabled
  },
  model: {
    prop: 'checked',
    event: 'formChange',
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
        ...this.$listeners,
        change: (event) => {
          if (this.checkboxType) {
            this.$emit('change', event);
            this.$emit('formChange', event.target.checked);
          } else {
            const idx = this.checked.indexOf(this.value);
            if (idx === -1) {
              this.checked.push(this.value);
            } else {
              this.checked.splice(idx, 1);
            }
            this.$emit('change', event);
            this.$emit('formChange', this.checked);
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
  display: block;
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
    background-image: url('../assets/images/checkbox-off-black.svg');
  }
  span {
    color: #fff;
  }
  &.checked {
    .icon {
      background-image: url('../assets/images/checkbox-on-black.svg');
    }
  }
  &.disabled {
  }
  /*all check box*/
  &.all-type2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 44px;
    border: solid 1px #343a40;
    background: #495057;
    padding: 0 15px;
    border-radius: 10px;
    margin-right: 10px;
    .icon {
      opacity: 0;
    }
    span {
      font-size: 16px;
      color: #fff;
    }
    &.checked {
      background: #20c997;
    }
    &.disabled {
      background: rgba(0, 0, 0, 0.5);
      span {
        opacity: 0.2;
      }
    }
  }
  /*커스텀 스타일*/
  &.type2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 44px;
    padding: 15px 22px;
    box-sizing: border-box;
    border: solid 1px #343a40;
    background: #495057;
    .icon {
      opacity: 0;
    }
    span {
      font-size: 16px;
      padding: 0;
      color: #fff;
    }
    &.checked {
      background: #20c997;
      span {
        color: #fff;
      }
    }
    &.disabled {
      background: rgba(0, 0, 0, 0.5);
      span {
        opacity: 0.2;
      }
    }
  }
}
</style>
