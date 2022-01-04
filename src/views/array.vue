<template>
  <div>
    <div class="abc">
      <router-link to="/array_bak">과거의 어레이</router-link>
    </div>
    <div class="wrap">
      <div class="lists">
        <ul class="list">
          <li v-for="item in list.array1" :key="item.key">
            <listBtn :item="item" @clickChangeBtn="clickItem(item)" />
          </li>
        </ul>
      </div>
      <div class="lists">
        <ul class="list">
          <li v-for="item in list.array2" :key="item.key">
            <listBtn :item="item" @clickChangeBtn="clickItem(item)" />
          </li>
        </ul>
      </div>

      <span class="icon-dup" @click="moveUp()">
        <font-awesome-icon icon="angle-double-up" />
      </span>
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
      selectItem: null,
    };
  },
  methods: {
    clickItem(value) {
      this.selectItem = value;
      console.log(this.selectItem);
    },
    moveUp() {
      console.log(Object.keys(this.selectItem).includes('array1'));
      Object.keys(this.list).forEach((key) => {
        //console.log(key);
        console.log(this.list[key]);
      });
      //console.log(Object.keys(this.list));
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
  /*position: absolute;
  top: 50%;*/
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  color: #444;
  /*  display: none;*/
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
