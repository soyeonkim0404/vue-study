<script>
import inputCheckbox from '../components/input-checkbox';
export default {
  name: 'input-checkbox-disable',
  extends: inputCheckbox,
  props: ['weekDayItems', 'checked', 'dataOption', 'dataTime'],
  model: {
    prop: 'checked',
    event: 'change',
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: (event) => {
          //console.log(event.target.checked);
          if (event.target.checked) {
            this.dataOption.allChk.disabled = true;
            this.dataOption.weekDayList = [];

            this.dataTime.start.disabled = true;
            this.dataTime.end.disabled = true;

            this.weekDayItems
              .filter((el) => !el.dataDisabled)
              .forEach((el) => (el.disabled = true));
          } else {
            this.dataOption.allChk.disabled = false;

            this.dataTime.start.disabled = false;
            this.dataTime.end.disabled = false;

            this.weekDayItems.forEach((el) => (el.disabled = false));
          }
          this.$emit('change', event.target.checked);
        },
      };
    },
  },
};
</script>
