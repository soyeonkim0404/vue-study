<template>
  <div class="wrap">
    <div class="lists" v-for="(list, listIndex) in lists" :key="listIndex">
      <ul class="list">
        <li v-for="(item, index) in list.word" :key="index">
          <listBtn :item="item" />
          <span
            v-if="listIndex !== 0"
            @click="moveTo(listIndex, index, -1)"
            class="icon-left"
          >
            <font-awesome-icon icon="angle-left" />
          </span>
          <span
            v-if="listIndex !== lists.length - 1"
            @click="moveTo(listIndex, index, 1)"
            class="icon-right"
          >
            <font-awesome-icon icon="angle-right" />
          </span>
          <!--위아래-->
          <span class="icon-dup" @click="moveUp(listIndex, index)">
            <font-awesome-icon icon="angle-double-up" />
          </span>
          <span class="icon-up" @click="moveFrom(listIndex, index, -1)">
            <font-awesome-icon icon="angle-up" />
          </span>
          <span class="icon-down" @click="moveFrom(listIndex, index, 1)">
            <font-awesome-icon icon="angle-down" />
          </span>
          <span class="icon-ddown" @click="moveDown(listIndex, index)">
            <font-awesome-icon icon="angle-double-down" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import listBtn from '../components/listBtn';

export default {
  name: 'array',
  components: { listBtn },
  data() {
    return {
      lists: [
        {
          name: 'array1',
          word: [
            { key: 1, val: '딸기' },
            { key: 2, val: '바나나' },
            { key: 3, val: '샤인머스켓' },
            { key: 4, val: '파인애플' },
            { key: 5, val: '딸기' },
          ],
        },
        {
          name: 'array2',
          word: [
            { key: 1, val: '월' },
            { key: 2, val: '화' },
            { key: 3, val: '수' },
            { key: 4, val: '목' },
            { key: 5, val: '금' },
            { key: 6, val: '토' },
            { key: 7, val: '일' },
          ],
        },
      ],
    };
  },
  methods: {
    moveTo(listIndex, index, num) {
      const item = this.lists[listIndex].word.splice(index, 1);
      this.lists[listIndex + num].word.push(item[0]);
    },
    moveFrom(listIndex, index, num) {
      const item = this.lists[listIndex].word.splice(index, 1);
      this.lists[listIndex].word.splice(index + num, 0, item[0]);
    },
    moveUp(listIndex, index) {
      const item = this.lists[listIndex].word.splice(index, 1);
      this.lists[listIndex].word.unshift(item[0]);
    },
    moveDown(listIndex, index) {
      const item = this.lists[listIndex].word.splice(index, 1);
      this.lists[listIndex].word.push(item[0]);
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 1.5rem;
}

.lists + .lists {
  margin-left: 60px;
}

.lists:nth-child(2) li button {
  background: #d0ebff;
  color: #c92a2a;
}

.lists:nth-child(2) li:hover button {
  background: #a5d8ff;
}

.list {
  padding: 0;
  margin: 0;
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

span.icon-dup {
  left: 40px;
}

span.icon-up {
  left: 80px;
}

span.icon-down {
  right: 80px;
}
span.icon-ddown {
  right: 40px;
}

li:hover span[class^='icon'] {
  display: flex;
}
</style>
