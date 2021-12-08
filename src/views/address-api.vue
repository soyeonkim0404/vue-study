<template>
  <div id="api">
    <div class="content">
      <button class="modalBtn" @click="openModal">내주소는?</button>
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
      <!--모달-->
      <transition name="modal" appear @close="closeModal" v-if="modal">
        <div class="modal modal-overlay" @click.self="closeModal">
          <div class="modal-window">
            <div class="modal-content">
              <form name="form" id="form" method="post">
                <input type="text" name="keyword" value="" v-model="keyword" @keyup.enter="onClickSh(keyword)"/>
                <input type="button" value="주소검색하기" @click="onClickSh"/>
              </form>
              <!--리스트-->
              <div id="list">
                <ul>
                  <li v-for="(item, index) in datasJuso" :key="index" :current-page="currentPage">
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
                ></b-pagination>

              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {searchApi} from "../api/index.js";
export default {
  name: 'address-api',
  data: function() {
    return {
      datasJuso: [],
      datasCommon: [],
      keyword: "",
      resultZip: '',
      resultAddr: '',
      modal: false,
      totalCount:'',
      currentPage: 1,
    };
  },
  computed:{
    rows(){
      return this.totalCount
    }
  },
  methods: {
    async onClickSh() {
      const data= {
        keyword: this.keyword,
        currentPage: this.currentPage
      }
      try {
        const {data:{results : res}} = await searchApi(data);
        this.datasJuso = res.juso;
        this.datasCommon = res.common;
        this.totalCount = this.datasCommon.totalCount;
      }catch (error){
        console.log(error)
      }
    },
    resultPush(v) {
      this.resultZip = v.zipNo;
      this.resultAddr = v.roadAddrPart1;
      this.closeModal()
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    handlePageChange(value) {
      this.currentPage = value;
      this.onClickSh();
    },
  }
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
  width: 250px;
  height: 40px;
  padding: 0 10px;
  margin: 0;
  box-sizing: border-box;
}

form input[type="button"] {
  width: 100px;
  height: 40px;
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

/*모달*/
.modalBtn {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background: #91a7ff;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal.modal-overlay {
  position: fixed;
  z-index: 30;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.modal-window {
  width: 570px;
  height: 420px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}

.modal-content {
  padding: 10px 20px;
}

.modal-footer {
  background: #ccc;
  padding: 10px;
  text-align: right;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

.modal-enter-active .modal-window,
.modal-leave-active .modal-window {
  transition: opacity 0.4s, transform 0.4s;
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-window,
.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
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
</style>
