<template>
  <div class="pagination" v-if="paginationNumbering.list.length">
    <button
      class="arrow-btn first"
      v-if="paginationNumbering.start !== 1"
      @click="sendPage(paginationNumbering.start - 10)"
    >
      <font-awesome-icon icon="angle-double-left">
        <span class="blind">이전페이지</span>
      </font-awesome-icon>
    </button>
    <button
      class="arrow-btn pre"
      v-if="currentPage !== 1"
      @click="sendPage(currentPage - 1)"
    >
      <font-awesome-icon icon="angle-left">
        <span class="blind">이전</span>
      </font-awesome-icon>
    </button>
    <ul class="pageNm">
      <li
        v-for="page in paginationNumbering.list"
        :key="page"
        @click="sendPage(page)"
        :class="{ on: page === currentPage }"
      >
        {{ page }}
      </li>
    </ul>
    <button
      class="arrow-btn nex"
      v-if="currentPage !== totalPage"
      @click="sendPage(currentPage + 1)"
    >
      <font-awesome-icon icon="angle-right">
        <span class="blind">다음</span>
      </font-awesome-icon>
    </button>
    <button
      class="arrow-btn last"
      v-if="paginationNumbering.list.length === pageDft"
      @click="sendPage(paginationNumbering.finish + 1)"
    >
      <font-awesome-icon icon="angle-double-right">
        <span class="blind">다음페이지</span>
      </font-awesome-icon>
    </button>
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
    totalPage() {
      return Math.ceil(this.totalCount / this.countPerPage);
    },
    paginationNumbering() {
      let start =
        (Math.ceil(this.currentPage / this.pageDft) - 1) * this.pageDft + 1;
      let finish =
        start + this.pageDft > this.totalPage
          ? this.totalPage
          : start + this.pageDft - 1;
      let list = [];
      for (let i = start; i <= finish; i++) {
        list.push(i);
      }
      return { start, finish, list };
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
  .arrow-btn {
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
