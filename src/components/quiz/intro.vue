<template>
  <div class="quiz-wrap">
    <h2>
      MY<br />
      TOY PROJECT
    </h2>
    <button @click="nextPage" class="mt50">START THE QUIZ</button>
  </div>
</template>

<script>
export default {
  name: 'intro',
  props: ['pageNum'],
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    nextPage() {
      this.$emit('update:pageNum', this.num + 1);
    },
  },
};
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  font-size: 4rem;
  letter-spacing: 1px;
  line-height: 1.2;
}
button {
  font-size: 1.5rem;
  background: #e64980;
  padding: 25px 50px;
  border-radius: 50px;
  color: #fff;
}
</style>
