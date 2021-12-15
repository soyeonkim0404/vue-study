<template>
  <div class="todo">
    <div class="con">
      <Input @addTodo="addTodo" />
      <List :propsdata="todoItems" @removeTodo="removeTodo" />
      <Footer @removeAll="clearAll" />
    </div>
  </div>
</template>

<script>
import Input from '@/components/todo/Input';
import List from '@/components/todo/List';
import Footer from '@/components/todo/Footer';
export default {
  name: 'todolist',
  components: {
    Input,
    List,
    Footer,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != 'loglevel:webpack-dev-server') {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
};
</script>

<style scoped lang="scss">
.todo {
  width: 100%;
  .con {
    width: 400px;
    margin: 0 auto;
  }
}
</style>
