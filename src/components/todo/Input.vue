<template>
  <div class="todo-top">
    <div class="top">
      <h1>MyTodo</h1>
      <div class="day">{{ basicDate() }}</div>
    </div>
    <span class="soyeon"
      >Have a good day!<br />
      soyeon</span
    >
    <div class="inputBox">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
      <span class="addContainer" v-on:click="addTodo"> </span>

      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고</h3>
        <span slot="body">할 일을 입력해주세요</span>
        <button slot="footer" @click="showModal = false">닫기</button>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from '../common/modal.vue';
export default {
  components: {
    Modal,
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        let value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
};
</script>

<style scoped lang="scss">
.todo-top {
  background: rgb(116, 143, 252);
  background: linear-gradient(
    157deg,
    rgba(116, 143, 252, 1) 0%,
    rgba(218, 119, 242, 1) 100%
  );
  padding: 20px 30px 40px 30px;

  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
      font-weight: 400;
    }
    .day {
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }

  .soyeon {
    display: block;
    color: rgba(255, 255, 255, 1);
    font-size: 25px;
    font-weight: 400;
    margin: 20px 0 0;
    line-height: 1.5;
  }

  .inputBox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    margin: 40px 0 0;
  }
  input {
    outline: none;
    border: none;
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 25px;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    color: #fff;
  }
  .addContainer {
    position: absolute;
    top: 50%;
    right: 6px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    transform: translateY(-50%);
    border-radius: 40px;
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      background: url(../../assets/images/plus.svg) no-repeat center;
      background-size: 100%;
      transform: translate(-50%, -50%);
    }
  }
  .addBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #222;
    transform: translate(-50%, -50%);
  }
}
</style>
