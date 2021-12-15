<template>
  <label :class="{ allChecked: allChk }">
    <input type="checkbox" :allChk="allChk" @change="handleChangeChkAll" />
    <span><slot></slot></span>
  </label>
</template>
<script>
export default {
  name: 'InputAllCheckbox',
  props: {
    allChk: Boolean,
    weekDayItems: Array,
    chkWeekday: Array,
  },
  model: {
    prop: 'allChk',
    event: 'change',
  },
  watch: {
    chkWeekday() {
      this.allCheck();
    },
  },
  created() {
    this.allCheck();
  },

  methods: {
    allCheck() {
      this.$emit('change', this.weekDayItems.length === this.chkWeekday.length);
    },

    handleChangeChkAll(el) {
      this.$emit(
        'update:chkWeekday',
        el.target.allChk ? this.weekDayItems : []
      );
    },
  },
};
</script>
