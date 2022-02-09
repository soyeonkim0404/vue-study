<template>
  <div class="quiz-wrap">
    <div class="flex-box"></div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['pageNum'],
  data() {
    return {
      num: 1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
