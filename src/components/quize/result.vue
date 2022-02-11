<template>
  <div class="quiz-wrap">
    <div>
      {{ resultType.name }}<br />
      {{ resultType.desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'result',
  props: ['pageNum'],
  data() {
    return {
      num: 2,
    };
  },
  computed: {
    resultType() {
      const resultNum = this.$store.state.countArr.indexOf(
        Math.max(...this.$store.state.countArr)
      );
      return this.$store.state.answer.find((e, i) => {
        return i === resultNum;
      });
    },
  },
};
</script>

<style scoped></style>
