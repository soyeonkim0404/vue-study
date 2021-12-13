<template>
  <div>
    <ul class="input-checkbox">
      <li v-for="(item, index) in items" :key="index">
        <label
          :for="item.value"
          :class="{
            checked: checked.some((el) => {
              return el === item.value;
            }),
          }"
        >
          <input
            type="checkbox"
            v-bind="$attrs"
            :value="item.value"
            :checked="
              checked.some((el) => {
                return el === item.value;
              })
            "
            @change="onChange(item.value)"
          />
          <span>{{ item.label }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'InputCheckbox',
  props: ['items', 'checked'],
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change',
  },
  data() {
    return {
      chkbox_allChk: false,
    };
  },
  methods: {
    onChange(val) {
      const idx = this.checked.indexOf(val);
      if (idx === -1) {
        this.checked.push(val);
      } else {
        this.checked.splice(idx, 1);
      }
      this.$emit('change', this.checked);
    },
  },
};
</script>

<style scoped lang="scss"></style>
