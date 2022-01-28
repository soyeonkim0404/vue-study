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
          console.log(this.dataOption);
          if (event.target.checked) {
            this.dataOption.allChk.disabled = true;
            this.dataOption.weekDayList = [];
            this.dataOption.disableList = this.weekDayItems
              .filter((el) => !el.dataDisabled)
              .map((el) => (el.disabled = true));
          } else {
            this.dataOption.allChk.disabled = false;
            this.dataOption.disableList = [];
          }
          this.$emit('change', event.target.checked);
        },
      };
    },
  },
};
</script>
