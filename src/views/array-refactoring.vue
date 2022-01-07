<template>
  <div class="wrap">
    <ul
      v-for="(liItem, array, arrayIdx) in list"
      :key="array"
      v-show="liItem.length"
    >
      <li v-for="(item, idx) in liItem" :key="idx" class="item">
        {{ item.val }}
        <span class="icon-double-up" @click="move(item, idx, 'double-up')">
          <font-awesome-icon icon="angle-double-up" />
        </span>
        <span class="icon-double-down" @click="move(item, idx, 'double-down')">
          <font-awesome-icon icon="angle-double-down" />
        </span>
        <span class="icon-up" @click="move(item, idx, 'up')">
          <font-awesome-icon icon="angle-up" />
        </span>
        <span class="icon-down" @click="move(item, idx, 'down')">
          <font-awesome-icon icon="angle-down" />
        </span>
        <span
          class="icon-right"
          @click="moveTo(array, idx)"
          v-if="arrayIdx !== Object.keys(list).length - 1"
        >
          <font-awesome-icon icon="angle-right" />
        </span>
        <span
          class="icon-left"
          @click="moveTo(array, idx)"
          v-if="arrayIdx !== 0"
        >
          <font-awesome-icon icon="angle-left" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'arrayRefactoring',
  data() {
    return {
      list: {
        array1: [
          { key: 1, val: '딸기' },
          { key: 2, val: '바나나' },
          { key: 3, val: '샤인머스켓' },
          { key: 4, val: '파인애플' },
          { key: 5, val: '딸기' },
        ],
        array3: [],
        array2: [
          { key: 1, val: '월' },
          { key: 2, val: '화' },
          { key: 3, val: '수' },
          { key: 4, val: '목' },
          { key: 5, val: '금' },
          { key: 6, val: '토' },
          { key: 7, val: '일' },
        ],
      },
    };
  },
  methods: {
    move(item, idx, type = 'double-up') {
      Object.keys(this.list).forEach((array) => {
        const arrayList = this.list[array];
        if (arrayList.indexOf(item) >= 0) {
          const select = arrayList.splice(idx, 1);
          let result = '';
          switch (type) {
            case 'up':
              result = arrayList.splice(idx - 1, 0, select[0]);
              break;
            case 'down':
              result = arrayList.splice(idx + 1, 0, select[0]);
              break;
            case 'double-down':
              result = arrayList.push(select[0]);
              break;
            default:
              result = arrayList.unshift(select[0]);
          }
          return result;
        }
      });
    },
    moveTo(array, idx) {
      const select = this.list[array].splice(idx, 1);
      if (array === 'array1') {
        this.list.array2.push(select[0]);
      } else {
        this.list.array1.push(select[0]);
      }
    },
  },
};
</script>
<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  background: #ffe3e3;
  height: 40px;
}

.item:hover {
  background-color: #ffc9c9;
}

ul + ul {
  margin-left: 30px;
}

ul:nth-child(even) li {
  background: #d0ebff;
  color: #5f3dc4;
}

ul:nth-child(even) li:hover {
  background: #a5d8ff;
}

li {
  position: relative;
  list-style: none;
}

li + li {
  margin-top: 10px;
}

span[class^='icon'] {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  color: #444;
  display: none;
}

span.icon-right {
  right: 0;
}

span.icon-left {
  left: 0;
}

span.icon-double-up {
  left: 40px;
}

span.icon-up {
  left: 80px;
}

span.icon-down {
  right: 80px;
}
span.icon-double-down {
  right: 40px;
}

li:hover span[class^='icon'] {
  display: flex;
}
</style>
