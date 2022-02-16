<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem">
        {{ todoItem }}
        <span class="removeBtn" @click="removeTodo(todoItem, index)"> </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
    },
  },
};
</script>

<style scoped lang="scss">
section {
  background: #f1f3f5;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 30px;
  text-align: left;
}
li {
  display: flex;
  height: 45px;
  padding: 0 0 0 20px;
  background: #fff;
  /*box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.05);*/
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  & + li {
    margin: 0.5rem 0 0;
  }
}
.checkBtn {
  color: brown;
  margin-right: 5px;
}
.removeBtn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  margin-left: auto;
  color: #adb5bd;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    background: url(../../assets/images/trash.svg) no-repeat center;
    background-size: 100%;
    transform: translate(-50%, -50%);
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
