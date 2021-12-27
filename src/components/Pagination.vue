<template>
  <div class="pagination" v-if="pageSetting.list.length">
    <span
      class="arrow-btn pre"
      v-if="pageSetting.first !== null"
      @click="pageSetting.first !== null ? sendPage(pageSetting.first) : ''"
    >
      <font-awesome-icon icon="angle-left" />
    </span>
    <ul class="pageNm">
      <li
        v-for="page in pageSetting.list"
        :key="page"
        @click="sendPage(page)"
        :class="{ on: page === pageSetting.page }"
      >
        {{ page }}
      </li>
    </ul>
    <span
      class="arrow-btn nex"
      v-if="pageSetting.end !== null"
      @click="pageSetting.end !== null ? sendPage(pageSetting.end) : ''"
    >
      <font-awesome-icon icon="angle-right" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageSetting'],
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
      margin-right: 0;
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
