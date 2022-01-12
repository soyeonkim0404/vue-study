<template>
  <div class="page-wrap">
    <div class="checkbox-area">
      <InputAllCheckbox
        class="buttonStyle all"
        v-model="weekDayItems.week_allChk"
        :weekDayItems="
          weekDayItems.option.filter((el) => {
            return !el.disabled;
          })
        "
        :weekChkArray.sync="weekDayItems.weekDay"
      >
        전체 체크
      </InputAllCheckbox>

      <ul class="custom-chk">
        <li v-for="(item, index) in weekDayItems.option" :key="index">
          <inputCheckbox v-model="weekDayItems.weekDay" :value="item.value">
            {{ item.label }}
          </inputCheckbox>
        </li>
      </ul>
    </div>
    <formFile class="mt50" />
  </div>
</template>

<script>
import formFile from '../components/form-file';
import inputCheckbox from '../components/input-checkbox';
import InputAllCheckbox from '../components/InputAllCheckbox';
export default {
  name: 'form-page',
  components: { formFile, inputCheckbox, InputAllCheckbox },
  data() {
    return {
      weekDayItems: {
        week_allChk: false,
        weekDay: [],
        option: [
          {
            label: '월',
            value: 'monday',
          },
          {
            label: '화',
            value: 'tuesday',
          },
          {
            label: '수',
            value: 'wednesday',
          },
          {
            label: '목',
            value: 'thursday',
          },
          {
            label: '금',
            value: 'friday',
          },
          {
            label: '토',
            value: 'saturday',
          },
          {
            label: '일',
            value: 'sunday',
          },
        ],
      },
    };
  },
  methods: {
    allChkBtn() {
      this.weekDayItems.weekDay = [];
      if (this.weekDayItems.week_allChk) {
        this.weekDayItems.option.forEach((e) => {
          this.weekDayItems.weekDay.push(e.value);
        });
      }
    },
    /* allChkOnChange() {
      this.weekDayItems.week_allChk =
        this.weekDayItems.option.length === this.weekDayItems.weekDay.length;
    },*/
  },
};
</script>
<style scoped lang="scss">
.page-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.buttonStyle.all {
  display: inline-flex;
  width: 120px;
  height: 50px;
  border-left: solid 1px #ffa8a8;
  margin-right: 10px;
}
</style>
