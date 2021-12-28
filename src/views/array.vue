<template>
  <container>
    <div class="abc">
      <router-link to="/array_bak">과거의 어레이</router-link>
    </div>
    <div class="wrap">
      <div class="lists">
        <ul class="list">
          <li v-for="(item, index) in list.array1" :key="index">
            <listBtn :item="item" />
            <span @click="moveTo(item, -1)" class="icon-right">
              <font-awesome-icon icon="angle-right" />
            </span>
            <span class="icon-dup" @click="moveUp(item, index)">
              <font-awesome-icon icon="angle-double-up" />
            </span>
            <span class="icon-ddown" @click="moveDown(item, index)">
              <font-awesome-icon icon="angle-double-down" />
            </span>
            <span class="icon-up" @click="moveFrom(item, index, -1)">
              <font-awesome-icon icon="angle-up" />
            </span>
            <span class="icon-down" @click="moveFrom(item, index, 1)">
              <font-awesome-icon icon="angle-down" />
            </span>
          </li>
        </ul>
      </div>
      <div class="lists">
        <ul class="list">
          <li v-for="item in list.array2" :key="item.key">
            <listBtn :item="item" />
            <span @click="moveTo(item, 1)" class="icon-left">
              <font-awesome-icon icon="angle-left" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </container>
</template>

<script>
import listBtn from '../components/listBtn';
export default {
  name: 'array',
  components: { listBtn },
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
    moveUp(item, index) {
      const spliceItem = this.list.array1.splice(index, 1);
      this.list.array1.unshift(spliceItem[0]);
    },
    moveDown(item, index) {
      const spliceItem = this.list.array1.splice(index, 1);
      this.list.array1.push(spliceItem[0]);
    },
    moveFrom(item, index, num) {
      const spliceItem = this.list.array1.splice(index, 1);
      this.list.array1.splice(index + num, 0, spliceItem[0]);
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

.lists:nth-child(even) li button {
  background: #d0ebff;
  color: #5f3dc4;
}

.lists:nth-child(even) li:hover button {
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

.abc {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
