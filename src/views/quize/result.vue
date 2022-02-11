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
  computed: {
    resultType() {
      const resultNum = this.$store.state.pageSeq;
      return this.$store.state.answer.find((e, i) => {
        return i === resultNum;
      });
    },
  },
};
</script>

<style scoped></style>
