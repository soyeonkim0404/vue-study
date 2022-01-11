<template>
  <div class="pagination" v-if="pageDataSetting.list.length">
    <span
      class="arrow-btn first"
      v-if="pageDataSetting.start !== 1"
      @click="sendPage(pageDataSetting.start - 10)"
    >
      <font-awesome-icon icon="angle-double-left">
        <span class="blind">이전페이지</span>
      </font-awesome-icon>
    </span>
    <span
      class="arrow-btn pre"
      v-if="pageDataSetting.first !== null"
      @click="sendPage(pageDataSetting.first)"
    >
      <font-awesome-icon icon="angle-left">
        <span class="blind">이전</span>
      </font-awesome-icon>
    </span>
    <ul class="pageNm">
      <li
        v-for="page in pageDataSetting.list"
        :key="page"
        @click="sendPage(page)"
        :class="{ on: page === currentPage }"
      >
        {{ page }}
      </li>
    </ul>
    <span
      class="arrow-btn nex"
      v-if="pageDataSetting.end !== null"
      @click="sendPage(pageDataSetting.end)"
    >
      <font-awesome-icon icon="angle-right">
        <span class="blind">다음</span>
      </font-awesome-icon>
    </span>
    <span
      class="arrow-btn last"
      v-if="pageDataSetting.list.length === this.pageDft"
      @click="sendPage(pageDataSetting.finish + 1)"
    >
      <font-awesome-icon icon="angle-double-right">
        <span class="blind">다음페이지</span>
      </font-awesome-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      pageDft: 10,
    };
  },
  props: ['totalCount', 'currentPage', 'countPerPage'],
  model: {
    prop: 'currentPage',
    event: 'paging',
  },
  computed: {
    pageDataSetting() {
      const totalPage = Math.ceil(this.totalCount / this.countPerPage);
      const first = this.currentPage > 1 ? this.currentPage - 1 : null;
      const end = totalPage !== this.currentPage ? this.currentPage + 1 : null;
      let start =
        (Math.ceil(this.currentPage / this.pageDft) - 1) * this.pageDft + 1;
      let finish =
        start + this.pageDft > totalPage ? totalPage : start + this.pageDft - 1;
      let list = [];
      for (let i = start; i <= finish; i++) {
        list.push(i);
      }
      return { first, end, list, start, finish };
    },
  },
  methods: {
    sendPage(page) {
      this.$emit('paging', page);
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #fff;
    background: #868e96;
    border-radius: 5px;
    margin-right: 10px;
    &.nex {
      margin-left: 10px;
    }
  }
  .pageNm {
    li {
      display: inline-flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      background: #495057;
      color: #fff;
      border-radius: 5px;
      font-size: 14px;
      & + li {
        margin-left: 10px;
      }
      &.on {
        background: #212529;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
