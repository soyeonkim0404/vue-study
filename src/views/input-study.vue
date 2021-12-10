<template>
  <div class="wrap">
    <div class="page-title">checkbox buttons</div>

    <label>
      <input type="checkbox" v-model="select_all" @click="select" />
      Select All
    </label>

    <InputCheckbox v-model="weekDay" :items="weekDayItems" />
    <!--    <ul>
      <li v-for="(item, index) in weekDayItems" :key="index">
        <label>
          <input
            type="checkbox"
            :value="item.value"
            v-model="weekDay"
            @change="sel"
          />
          <i></i>
          <span>{{ item.label }}</span>
        </label>
      </li>
    </ul>-->

    <div class="page-title">radio buttons</div>
    <InputRadio v-model="gender" :items="genderItems" />
    <InputRadio v-model="fruit" :items="fruitItems" class="buttonStyle" />
  </div>
</template>

<script>
import InputRadio from '../components/InputRadio';
import InputCheckbox from '../components/InputCheckbox';

export default {
  name: 'input-study',
  components: {
    InputRadio,
    InputCheckbox,
  },
  data() {
    return {
      gender: '',
      genderItems: [
        {
          label: '남자',
          value: 'man',
          name: 'genderChk',
        },
        {
          label: '여자',
          value: 'woman',
          name: 'genderChk',
        },
      ],
      fruit: '',
      fruitItems: [
        {
          label: '바나나',
          value: 'banana',
          name: 'fruitChk',
        },
        {
          label: '딸기',
          value: 'strawberry',
          name: 'fruitChk',
        },
        {
          label: '샤인머스켓',
          value: 'shine musket',
          name: 'fruitChk',
        },
      ],
      select_all: false,
      weekDay: [],
      weekDayItems: [
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
        /*{
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
        },*/
      ],
    };
  },
  methods: {
    select() {
      this.weekDay = [];
      if (!this.select_all) {
        this.weekDayItems.forEach((e) => {
          this.weekDay.push(e.value);
        });
      }
    },
    sel() {
      if (
        this.weekDay.length === this.weekDayItems.length &&
        !this.select_all
      ) {
        //this.select();
        this.select_all = true;
      } else {
        this.select_all = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  flex-direction: column;
  div {
    & + div {
      margin-top: 100px;
    }
  }
}
</style>
