<template>
  <label :class="{ allChecked: allChk }">
    <input type="checkbox" :allChk="allChk"  />
    <span><slot></slot></span>
  </label>
</template>
<script>
export default {
  name: 'InputAllCheckbox',
  props: {
    allChk: Boolean,
  },
  model: {
    prop: 'allChk',
    event: 'change',
  },
  methods: {
  
  },
};
</script>
