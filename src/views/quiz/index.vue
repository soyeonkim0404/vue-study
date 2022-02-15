<template>
  <transition name="fade">
    <component :is="componentData[pageNum]" :pageNum.sync="pageNum" />
  </transition>
</template>
<script>
import Intro from '../../components/quiz/intro';
import Step from '../../components/quiz/step';
import Result from './result';
export default {
  name: 'quiz-view',
  components: {
    Intro,
    Step,
    Result,
  },
  data() {
    return {
      pageNum: 0,
      componentData: ['Intro', 'Step', 'Result'],
    };
  },
};
</script>

<style scoped></style>
