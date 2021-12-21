<template>
  <div id="api">
    <div class="content">
      <InputText v-model="keyword" @input="onClickSh" />
      <!--리스트-->
      <div id="list">
        <ul class="jusoList">
          <li
            v-for="(item, index) in datasJuso"
            :key="index"
            :current-page="currentPage"
          >
            <span class="text">
              {{ item.zipNo }}
              <span>{{ item.roadAddrPart1 }}</span>
            </span>
          </li>
        </ul>
      </div>

      <!--컴포넌트 페이징-->
      <Pagination
        :pageSetting="
          pageDataSetting(
            this.totalCount,
            this.countPerPage,
            this.block,
            this.currentPage
          )
        "
        @paging="pagingMethod"
      />

      <!--페이지네이션-->
      <!--      <div class="btn-cover" v-if="datasJuso.length">
        <button @click="prevPage" class="page-btn">이전</button>
        <span class="page-count">
          {{ currentPage }} / {{ totalCount }} 페이지
        </span>
        <button @click="nextPage" class="page-btn">다음</button>
      </div>-->
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
      datasCommon: [],
      keyword: '',
      resultZip: '',
      resultAddr: '',
      currentPage: 1,
      countPerPage: '',
      totalCount: '',
      block: 5,
    };
  },
  /* computed: {
    rows() {
      return this.totalCount;
    },
  },*/
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
          data: { results: res },
        } = await searchApi(data);
        this.datasJuso = res.juso;
        this.datasCommon = res.common;
        this.totalCount = this.datasCommon.totalCount;
        this.countPerPage = this.datasCommon.countPerPage;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    pagingMethod(page) {
      this.onClickSh();
      this.datasJuso.slice(
        (this.currentPage - 1) * this.countPerPage,
        this.currentPage * this.countPerPage
      );
      this.currentPage = page;
      this.pageDataSetting(
        this.totalCount,
        this.countPerPage,
        this.block,
        page
      );
    },
    pageDataSetting(total, perPage, block, page) {
      const totalPage = Math.ceil(total / perPage);
      let currentPage = page;
      const first =
        currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null;
      const end =
        totalPage !== currentPage
          ? parseInt(currentPage, 10) + parseInt(1, 10)
          : null;
      let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1;
      let endIndex =
        startIndex + block > totalPage ? totalPage : startIndex + block - 1;
      let list = [];
      for (let index = startIndex; index <= endIndex; index++) {
        list.push(index);
      }
      return { first, end, list, currentPage };
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
    width: 50vw;
    max-width: 620px;
    background: #343a40;
    margin: 0 auto;
    border-radius: 10px;
    padding: 20px;
  }
}

.result {
  margin-top: 20px;
}

.result-ipt,
input {
  display: block;
  width: 250px;
  height: 40px;
  padding: 0 10px;
  margin: 0;
  box-sizing: border-box;
}

.result-ipt.zip {
  width: 100px;
}

.result-ipt + .result-ipt {
  margin-top: 10px;
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
        opacity: 0.4;
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
</style>
