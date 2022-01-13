<template>
  <div id="api">
    <div class="content">
      <div class="search-area">
        <InputText
          v-model="keyword"
          class="searchIsBtn"
          @keydown.enter="onEvt"
        />
        <button type="button" @click="onEvt">
          <font-awesome-icon icon="arrow-down" />
        </button>
      </div>

      <!--리스트-->
      <div id="list">
        <ul class="result">
          <li v-for="(item, index) in datasJuso" :key="index">
            <span>
              {{ item.zipNo }}
              <span>{{ item.roadAddrPart1 }}</span>
            </span>
          </li>
        </ul>
      </div>

      <!--컴포넌트 페이징-->
      <Pagination
        :totalCount="totalCount"
        :countPerPage="countPerPage"
        v-model="currentPage"
        @paging="pagingMethod"
      />
    </div>
  </div>
</template>

<script>
import { searchApi } from '@/api';
import InputText from '@/components/InputText';
import Pagination from '@/components/Pagination';

export default {
  name: 'pagination-view',
  components: { InputText, Pagination },
  data: function () {
    return {
      datasJuso: [],
      keyword: '',
      currentPage: 1,
      countPerPage: 10,
      totalCount: '',
    };
  },
  methods: {
    async getData() {
      try {
        const {
          data: { results: response },
        } = await searchApi({
          keyword: this.keyword,
          currentPage: this.currentPage,
        });
        this.datasJuso = response.juso;
        this.totalCount = response.common.totalCount;
      } catch (error) {
        console.log(error);
      }
    },
    onEvt() {
      // 검색시
      this.currentPage = 1;
      this.getData();
    },
    pagingMethod() {
      // 페이지 이동시
      this.getData();
    },
  },
};
</script>

<style scoped lang="scss">
#api {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #212529;
  .content {
    width: 620px;
    background: #343a40;
    margin: 0 auto;
    border-radius: 10px;
    padding: 20px;
  }
}

.result {
  padding: 0 0 0 15px;
  li {
    margin-top: 20px;
    & + li {
      margin-top: 25px;
    }
    span {
      border: none;
      padding: 0;
      margin: 0;
      color: #ffffff;
      font-size: 1.2rem;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        opacity: 0.8;
      }
      span {
        margin-left: 25px;
        font-weight: normal;
      }
    }
  }
}

.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
  .page-btn {
    width: 5rem;
    height: 2.5rem;
    letter-spacing: 0.5px;
    background: #212529;
    color: #fff;
    border-radius: 5px;
    &:hover {
      opacity: 0.8;
    }
  }
  .page-count {
    padding: 0 1rem;
    color: #fff;
  }
}

.search-area {
  display: flex;
  align-items: center;
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-left: calc(100% - 86% - 60px);
    background: #495057;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    &:hover,
    &:active,
    &:focus {
      box-shadow: 0 5px 16px rgba(97, 97, 97, 0.5);
    }
  }
}
</style>
