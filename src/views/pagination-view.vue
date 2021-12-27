<template>
  <div id="api">
    <div class="content">
      <div class="search-area">
        <InputText
          v-model="keyword"
          class="searchIsBtn"
          @keyup.enter="onClickSh"
        />
        <button type="button" @click="onClickSh">
          <font-awesome-icon icon="arrow-down" />
        </button>
      </div>

      <!--리스트-->
      <div id="list">
        <transition-group name="list" tag="ul" class="jusoList">
          <li v-for="(item, index) in datasJuso" :key="index">
            <span>
              {{ item.zipNo }}
              <span>{{ item.roadAddrPart1 }}</span>
            </span>
          </li>
        </transition-group>
      </div>

      <!--컴포넌트 페이징-->
      <Pagination
        :pageSetting="
          pageDataSetting(
            this.totalCount,
            this.countPerPage,
            this.pageDft,
            this.currentPage
          )
        "
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
      pageDft: 10, // 페이징 넘버 갯수
    };
  },
  mounted() {
    this.pagingMethod(this.currentPage);
  },
  methods: {
    async onClickSh() {
      const data = {
        keyword: this.keyword,
        currentPage: this.currentPage,
      };
      try {
        const {
          data: { results: response },
        } = await searchApi(data);
        this.datasJuso = response.juso;
        this.totalCount = response.common.totalCount;
        this.countPerPage = response.common.countPerPage;
        //console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    pagingMethod(page) {
      /* this.datasJuso.slice(
        (this.currentPage - 1) * this.countPerPage,
        this.currentPage * this.countPerPage
      );*/
      this.currentPage = page;
      this.pageDataSetting(
        this.totalCount,
        this.countPerPage,
        this.pageDft,
        page
      );
      this.onClickSh();
    },
    pageDataSetting(total, perPage, pageDft, page) {
      // 전체 갯수 / 기본노출갯수 10개
      const totalPage = Math.ceil(total / perPage);
      // 현재 페이지 이전
      const first = page > 1 ? page - 1 : null;
      //현재 페이지 다음
      const end = totalPage !== page ? page + 1 : null;
      //디폴트 페이지 첫번째 숫자
      let start = (Math.ceil(page / pageDft) - 1) * pageDft + 1;
      //디폴트 페이지 마지막 숫자
      let finish =
        start + pageDft > totalPage ? totalPage : start + pageDft - 1;

      let list = [];
      for (let i = start; i <= finish; i++) {
        list.push(i);
      }

      return { first, end, list, page };
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

.jusoList {
  padding: 0 0 0 15px;
}

.jusoList {
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

.list-enter-from,
.list-leave-to {
  transform: scale(0.1);
  opacity: 0;
}
.list-enter-to,
.list-leave-from {
  transform: scale(1);
  opacity: 1;
}
.list-enter-active {
  transition: all 3s ease;
}

.list-leave-active {
  transition: all 3s ease;
}

.list-move {
  transition: all 3s ease;
}
</style>
