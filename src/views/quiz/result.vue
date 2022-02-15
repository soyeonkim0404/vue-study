<template>
  <div class="quiz-wrap">
    <div class="flex-box">
      <h3>{{ resultType.name }}</h3>
      <p>{{ resultType.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'result',
  props: ['pageNum'],
  computed: {
    resultType() {
      const resultNum = this.$store.state.countArr.indexOf(
        Math.max(...this.$store.state.countArr)
      );
      return this.$store.state.result.find((e, i) => {
        return i === resultNum;
      });
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  line-height: 1.2;
  font-size: 2.5rem;
  color: #fff;
  font-weight: normal;
}
p {
  margin-top: 40px;
  font-size: 1.5rem;
  line-height: 1.5;
}
</style>
