<template>
  <div id="api">
    <div class="content">
      <form name="form" id="form" method="post">
        <input
          type="text"
          name="keyword"
          value=""
          v-model="keyword"
          @keyup.enter="onClickSh(keyword)"
        />
        <button type="button" @click="onClickSh" class="form-btn">
          <font-awesome-icon icon="arrow-down" />
        </button>
      </form>

      <!--리스트-->
      <div id="list">
        <ul class="jusoList">
          <li
            v-for="(item, index) in datasJuso"
            :key="index"
            :current-page="currentPage"
          >
            <button @click="resultPush(item)">
              <span>
                {{ item.zipNo }}
              </span>
              <span>
                {{ item.roadAddrPart1 }}
              </span>
            </button>
          </li>
        </ul>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          aria-controls="list"
          @change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { searchApi } from '@/api';

export default {
  name: 'pagination',
  data: function () {
    return {
      datasJuso: [],
      datasCommon: [],
      keyword: '',
      resultZip: '',
      resultAddr: '',
      totalCount: '',
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.totalCount;
    },
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
      } catch (error) {
        console.log(error);
      }
    },
    resultPush(v) {
      this.resultZip = v.zipNo;
      this.resultAddr = v.roadAddrPart1;
    },
    handlePageChange(value) {
      this.currentPage = value;
      this.onClickSh();
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
    background: #343a40;
    margin: 0 auto;
    border-radius: 10px;
    padding: 20px;
    form input {
      display: inline-block;
      width: 88%;
      height: 60px;
      padding: 0 20px;
      margin: 0;
      box-sizing: border-box;
      vertical-align: middle;
      border-radius: 10px;
      border: none;
      background: #495057;
      color: #fff;
      font-size: 1.2rem;
      &:hover,
      &:focus {
        border: none;
        outline: none;
        box-shadow: 0 5px 16px rgba(43, 43, 43, 0.5);
        background: #495057;
        color: #fff;
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #495057 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    .form-btn {
      width: 10%;
      height: 60px;
      padding: 0;
      text-align: center;
      margin-left: 2%;
      background: #495057;
      color: #fff;
      font-size: 1.2rem;
      box-sizing: border-box;
      vertical-align: middle;
      border-radius: 10px;
    }
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

.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}

.b-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

#list {
  margin-top: 20px;
}
.jusoList {
  padding: 0;
  margin: 0;
}

.jusoList li + li {
  margin-top: 10px;
}

.jusoList li button {
  border: none;
  padding: 0;
  margin: 0;
  background: #fff;
}

.jusoList li button:hover {
  opacity: 0.4;
}
</style>
