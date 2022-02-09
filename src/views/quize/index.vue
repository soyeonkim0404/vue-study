<template>
  <transition @enter="enter" @leave="leave">
    <component
      :is="componentData[pageNum]"
      :pageNum.sync="pageNum"
      :stepNum.sync="stepNum"
    />
  </transition>
</template>

<script>
import Card from './card.vue';
import Intro from './intro.vue';
export default {
  name: 'index',
  components: {
    Card,
    Intro,
  },
  data() {
    return {
      pageNum: 0,
      stepNum: 0,
      componentData: ['Intro', 'Card'],
    };
  },
};
</script>

<style scoped lang="scss">
.contents {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    circle at 75% 130%,
    rgba(238, 197, 183, 1) 17%,
    rgba(201, 194, 234, 1) 100%
  );
}
.flex-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  padding: 40px;
  border-radius: 20px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  .main-icon {
    width: 100px;
    height: 100px;
  }
}
</style>
