<template>
  <div class="cal">
    <main>
      <input type="text" readonly v-model="current" />
      <div class="button-wrap">
        <button @click="clear" class="ac">AC</button>
        <button @click="operator('/')">/</button>
        <button @click="number('7')">7</button>
        <button @click="number('8')">8</button>
        <button @click="number('9')">9</button>
        <button @click="operator('*')">*</button>
        <button @click="number('4')">4</button>
        <button @click="number('5')">5</button>
        <button @click="number('6')">6</button>
        <button @click="operator('-')">-</button>
        <button @click="number('1')">1</button>
        <button @click="number('2')">2</button>
        <button @click="number('3')">3</button>
        <button @click="operator('+')">+</button>
        <button @click="number('0')" class="zero">0</button>
        <button @click="dot('.')">.</button>
        <button @click="compute">=</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      operatorChked: true,
      computeChked: false,
    };
  },
  methods: {
    clear() {
      this.current = '';
      this.operatorChked = true;
    },
    operator(e) {
      if (this.operatorChked) return false;
      if (this.computeChked) {
        this.computeChked = false;
      }
      this.current += e;
      return (this.operatorChked = true);
    },
    number(n) {
      if (this.computeChked) {
        this.current = n;
        this.computeChked = false;
      } else {
        this.current += n;
      }
      this.operatorChked = false;
    },
    dot(e) {
      this.current += e;
    },
    compute() {
      if (this.operatorChked) return;
      this.current = eval(this.current);
      this.computeChked = true;
    },
  },
};
</script>

<style scoped>
.cal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: black;
}
main {
  width: 300px;
}
.button-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
input,
button {
  width: 70px;
  height: 70px;
  outline: none;
  border-radius: 100%;
  margin-top: 0.5rem;
}
input {
  width: 100%;
  text-align: right;
  border: none;
  padding-right: 1rem;
  font-size: 3rem;
  border-radius: 0;
  background: transparent;
  color: #fff;
}
button {
  background: #333;
  border: 1px solid #333;
  font-size: 2rem;
  color: #fff;
}
/* nth-child(4n+2): 4번째 요소마다 스타일을 적용하는데 처음에만 두번째에 적용 */
button:nth-child(4n + 2),
button:last-child {
  background-color: orange;
  margin-left: 0.15rem;
}
button:hover {
  opacity: 0.5;
}
.ac {
  grid-column: 1/4;
  width: inherit;
  background: #6a6a6c;
  border-radius: 35px;
}
.zero {
  grid-column: 1/3;
  width: inherit;
  border-radius: 35px;
  margin-right: 0.15rem;
}
</style>
