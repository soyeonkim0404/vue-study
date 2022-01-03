<template>
    <div class="col-6">
      <draggable
        class="list-group"
        tag="transition-group"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        :list="list"
        @change="onChange"
      >
        <slot></slot>
      </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  display: "Transitions",
  props: ['list'],
  model: {
    prop: 'list',
    event: 'change',
  },
  components: {
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods:{
      onChange(e){
          console.log(e);
          //this.$emit('change', e);
      }
  }
};
</script>