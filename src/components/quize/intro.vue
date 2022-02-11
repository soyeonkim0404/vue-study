<template>
  <div class="quiz-wrap">
    <div class="flex-box">
      <!--      <img src="../../assets/images/smile-face.svg" alt="" class="main-icon" />
      <div class="text">
        <span>Clone Coding</span>
        <h2 class="mt20">Date MBTI</h2>
        <p class="mt30">card component 형식의 문답형 toy project 이다</p>
      </div>-->
      <button class="btn" @click="nextPage">START!</button>
    </div>
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
.flex-box {
  .main-icon {
    width: 100px;
    height: 100px;
  }
  .text {
    display: block;
    text-align: center;
    margin-top: 30px;
    span {
      font-size: 14px;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
  .btn {
    width: 100px;
    height: 45px;
    text-align: center;
    margin-top: 20px;
    background: #ffd42a;
  }
}
</style>
