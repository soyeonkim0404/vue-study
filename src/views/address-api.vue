<template>
  <container>
    <form action="#" class="form-area">
      <form-item>
        <template #label>주소</template>
        <template #val>
          <div class="form-flex">
            <input-text
              v-model="resultZip"
              :placeholder="placeholder.postalCode"
            />
            <button class="modalBtn" @click="showModal = true">
              주소 검색
            </button>
          </div>
          <input-text
            class="mt15"
            v-model="resultAddr"
            :placeholder="placeholder.address"
          />
        </template>
      </form-item>
    </form>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">주소 검색</h3>
      <template slot="body">
        <form name="form" class="search">
          <input-text v-model="keyword" @keydown.enter="onEvt" />
          <button @click="onEvt" class="modalBtn">주소 검색</button>
        </form>

        <ul class="result">
          <li v-for="(item, index) in datasJuso" :key="index">
            <span @click="resultPush(item)">
              {{ item.zipNo }}
              <span>{{ item.roadAddrPart1 }}</span>
            </span>
          </li>
        </ul>

        <!--컴포넌트 페이징-->
        <Pagination
          :totalCount="totalCount"
          :countPerPage="countPerPage"
          v-model="currentPage"
          @paging="pagingMethod"
        />
      </template>
    </Modal>
  </container>
</template>

<script>
import { searchApi } from '@/api';
import formItem from '../components/form/form-item';
import Pagination from '@/components/Pagination';
export default {
  name: 'address-api',
  components: {
    formItem,
    Pagination,
  },
  data: function () {
    return {
      datasJuso: [],
      keyword: '',
      currentPage: 1,
      countPerPage: 10,
      totalCount: '',
      resultZip: '',
      resultAddr: '',
      showModal: false,
      placeholder: {
        postalCode: '우편번호',
        address: '주소를 입력하세요',
      },
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
    resultPush(v) {
      this.resultZip = v.zipNo;
      this.resultAddr = v.roadAddrPart1;
      this.showModal = false;
    },
  },
};
</script>

<style scoped lang="scss">
.form-area {
  width: 800px;
  padding: 40px;
  background: #343a40;
  border-radius: 20px;
}

.form-flex {
  display: flex;
  span {
    flex: 1 1 auto;
    & + span {
      margin-left: 10px;
    }
  }
}

.modalBtn {
  flex: 0 0 150px;
  height: 60px;
  font-size: 1rem;
  background: #212529;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  color: #fff;
  &:hover,
  &:focus {
    box-shadow: 0 5px 16px rgba(97, 97, 97, 0.5);
  }
}

::v-deep .modal-body {
  flex-direction: column;
  .search {
    display: flex;
    width: 100%;
    .input-text {
      flex: 1 1 auto;
      input {
        color: #212529;
        background: #dee2e6;
      }
    }
    button {
      background: #748ffc;
    }
  }
}

.result {
  width: 100%;
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
      color: #212529;
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
</style>
