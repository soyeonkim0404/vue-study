<template>
  <div id="api">
    <div class="content">
      <button class="modalBtn" @click="showModal = true">내주소는?</button>
      <!--출력 인풋-->
      <div class="result">
        <input
          type="text"
          name="zipNo"
          v-model="resultZip"
          class="result-ipt zip"
        />
        <input
          type="text"
          name="roadAddrPart1"
          v-model="resultAddr"
          class="result-ipt"
        />
      </div>

      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">주소 검색</h3>
        <div slot="body">
          <form name="form" id="form" method="post">
            <input
              type="text"
              name="keyword"
              value=""
              v-model="keyword"
              @keyup.enter="onClickSh(keyword)"
            />
            <input type="button" value="주소검색하기" @click="onClickSh" />
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
      </Modal>
    </div>
  </div>
</template>

<script>
import { searchApi } from '@/api';
import Modal from '../components/modal';
export default {
  name: 'address-api',
  components: {
    Modal,
  },
  data: function () {
    return {
      datasJuso: [],
      datasCommon: [],
      keyword: '',
      resultZip: '',
      resultAddr: '',
      totalCount: '',
      currentPage: 1,
      showModal: false,
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
      this.showModal = false;
    },
    handlePageChange(value) {
      this.currentPage = value;
      this.onClickSh();
    },
  },
};
</script>

<style>
#api {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #edf2ff;
}

form input {
  display: inline-block;
  width: 300px;
  height: 50px;
  padding: 0 10px;
  margin: 0;
  box-sizing: border-box;
  vertical-align: middle;
}

form input[type='button'] {
  width: 200px;
  height: 50px;
  outline: none;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  vertical-align: middle;
  margin-left: 10px;
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

.modalBtn {
  width: 250px;
  height: 50px;
  background: #d0bfff;
  border: none;
}
</style>
