<template>
    <div>
      <drag v-model="list">
        <div v-for="item in list" :key="item.order">
          {{item.name}}
        </div>
      </drag>
    </div>
</template>

<script>
import drag from "../components/drag";

export default {
  name: "drag-view",
  components: {
    drag
  },
  data() {
    return {
      list : [
        {
          "name": "vue.draggable",
          "order": 1
        },
        {
          "name": "component",
          "order": 3
        },
        {
          "name": "for",
          "order": 4
        },
        {
          "name": "vue.js 2.0",
          "order": 5
        },
        {
          "name": "draggable",
          "order": 2
        },
        {
          "name": "based",
          "order": 6
        },
        {
          "name": "on",
          "order": 7
        },
        {
          "name": "Sortablejs",
          "order": 8
        }
      ]
    };
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    }
  },
};
</script>

<style scoped>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>