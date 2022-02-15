<template>
  <div class="quiz-wrap">
    <div class="flex-box">
      <div
        v-for="listItem in $store.state.quizeQa"
        :key="listItem.seq"
        :class="`step-${listItem.seq}`"
        v-show="$store.state.startCardNum === listItem.seq"
      >
        <span class="title">{{ listItem.q }}</span>
        <ul class="a-list">
          <li v-for="(item, index) in listItem.a" :key="index">
            <button class="btn" @click="nextGo(listItem.seq, item.type)">
              {{ item.answer }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'step',
  props: ['pageNum'],
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    ...mapMutations(['nextStep', 'countType']),
    nextGo(num, type) {
      this.nextStep(num);
      this.countType(type);
      if (this.$store.state.quizeEndPoint === num) {
        this.$router.push(`quiz/${this.$store.state.pageSeq}`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-size: 2.5rem;
  font-weight: normal;
  color: #fff;
}
.a-list {
  li {
    margin-top: 50px;
    .btn {
      font-size: 1rem;
      background: #be4bdb;
      padding: 25px 50px;
      border-radius: 50px;
      color: #fff;
    }
    & + li {
      margin-top: 30px;
    }
  }
}
</style>
