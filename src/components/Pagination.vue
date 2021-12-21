<template>
  <div class="pagination" v-if="pageSetting.list.length">
    <span
      class="arrow-btn pre"
      v-if="pageSetting.first !== null"
      @click="pageSetting.first !== null ? sendPage(pageSetting.first) : ''"
    >
      <font-awesome-icon icon="angle-left" />
    </span>
    <ul>
      <li v-for="page in pageSetting.list" :key="page" @click="sendPage(page)">
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
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #fff;
    background: #212529;
    border-radius: 5px;
  }
  ul {
    li {
      display: inline-flex;
      cursor: pointer;
    }
  }
}
</style>
