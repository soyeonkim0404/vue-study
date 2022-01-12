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
  watch: {
    weekChkArray() {
      this.$emit(
        'change',
        this.weekChkArray.length === this.weekDayItems.length
      );
    },
  },
  /*computed: {
    listeners() {
      return {
        change: () => {
          this.weekDayItems.weekDay = [];
          if (this.weekDayItems.week_allChk) {
            this.weekDayItems.option.forEach((e) => {
              this.weekDayItems.weekDay.push(e.value);
            });
          }
          this.$emit('change', this.weekDayItems.weekDay);
        },
      };
    },
  },*/
};
</script>
