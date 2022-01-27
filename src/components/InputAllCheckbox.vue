<script>
import inputCheckbox from '../components/input-checkbox';
export default {
  name: 'input-checkbox-all',
  extends: inputCheckbox,
  props: ['weekDayItems', 'weekChkArray', 'checked'],
  model: {
    prop: 'checked',
    event: 'change',
  },
  created() {
    this.allCheck = true;
  },
  watch: {
    weekChkArray() {
      this.$emit(
        'change',
        this.weekDayItems.length !== 0
          ? this.weekChkArray.length === this.weekDayItems.length
          : false
      );
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: (event) => {
          this.$emit(
            'update:weekChkArray',
            event.target.checked ? this.weekDayItems : []
          );
        },
      };
    },
  },
};
</script>
