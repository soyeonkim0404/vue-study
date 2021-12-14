<template>
  <div class="wrap">
    <div class="page-title">checkbox buttons</div>
    <!--custom style-->
    <!--    <InputAllCheckbox
      v-model="weekDayItems.week_allChk"
      :weekDay="weekDayItems.weekDay"
      :item="weekDayItems.option"
    >
      전체
    </InputAllCheckbox>-->

    <label>
      <input
        type="checkbox"
        v-model="weekDayItems.week_allChk"
        @click="chkAll"
        @change="chkWeek"
      />
      <span>전체</span>
    </label>

    <ul class="custom-chk">
      <li v-for="(item, index) in weekDayItems.option" :key="index">
        <InputCheckbox
          v-model="weekDayItems.weekDay"
          :value="item.value"
          class="buttonStyle"
          @checkCheck="ddd"
        >
          {{ item.label }}
        </InputCheckbox>
      </li>
    </ul>

    <div class="page-title">radio buttons</div>
    <ul>
      <li v-for="(item, index) in genderItems.option" :key="index">
        <InputRadio
          :val="item.value"
          :name="item.name"
          v-model="genderItems.gender"
        >
          {{ item.label }}
        </InputRadio>
      </li>
    </ul>

    <ul>
      <li v-for="(item, index) in fruitItems.option" :key="index">
        <InputRadio
          :val="item.value"
          :name="item.name"
          v-model="fruitItems.fruit"
          class="buttonStyle"
        >
          {{ item.label }}
        </InputRadio>
      </li>
    </ul>
  </div>
</template>

<script>
import InputRadio from '../components/InputRadio';
import InputCheckbox from '../components/InputCheckbox';
//import InputAllCheckbox from '../components/InputAllCheckbox';

export default {
  name: 'input-study',
  components: {
    InputRadio,
    InputCheckbox,
    //InputAllCheckbox,
  },
  data() {
    return {
      genderItems: {
        gender: '',
        option: [
          {
            label: '남자',
            value: '남자',
            name: 'genderChk',
          },
          {
            label: '여자',
            value: '여자',
            name: 'genderChk',
          },
        ],
      },
      fruitItems: {
        fruit: '',
        option: [
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
      },
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
    chkAll() {
      this.weekDayItems.weekDay = [];
      if (!this.week_allChk) {
        this.weekDayItems.option.forEach((e) => {
          this.weekDayItems.weekDay.push(e.value);
        });
      }
    },
    chkWeek() {
      if (
        this.weekDayItems.weekDay.length === this.weekDayItems.option.length &&
        !this.week_allChk
      ) {
        this.week_allChk = true;
      } else {
        this.week_allChk = false;
      }
    },
    ddd(el) {
      if (el.length === this.weekDayItems.option.length && !this.week_allChk) {
        console.log('dddd');
        this.week_allChk = true;
      } else {
        console.log('saaa');
        this.week_allChk = false;
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

.custom-chk {
  li {
    display: inline-flex;
    &:first-child {
      label {
        border-left: solid 1px #ffa8a8;
      }
    }
  }
}
</style>
