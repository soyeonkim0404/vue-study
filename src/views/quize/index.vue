<template>
  <transition name="fade">
    <component :is="componentData[pageNum]" :pageNum.sync="pageNum" />
  </transition>
</template>
<script>
import Intro from '../../components/quize/intro';
import Step from '../../components/quize/step';
import Result from '../../components/quize/result';
export default {
  name: 'quize-view',
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
