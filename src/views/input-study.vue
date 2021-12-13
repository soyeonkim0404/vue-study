<template>
  <div class="wrap">
    <div class="page-title">checkbox buttons</div>
    <!--
    HTML 입력 요소의 종류에 따라 `v-model` 속성이 각각 다음과 같이 구성됩니다.
    (1) input 태그에는 `value / input`
    (2) checkbox 태그에는 `checked / change`
    (3) select 태그에는 `value / change`
    -->
    <label>
      <input type="checkbox" v-model="chkbox_allChk" @click="allChkBtn" />
      <span>전체</span>
    </label>
    <ul>
      <li v-for="(item, index) in weekDayItems" :key="index">
        <InputCheckbox
          v-model="weekDay"
          :value="item.value"
          @checkCheck="chkItem"
        >
          {{ item.label }}
        </InputCheckbox>
      </li>
    </ul>

    <label>
      <input type="checkbox" v-model="chkbox_allChk" @click="allChkBtn" />
      <span>전체</span>
    </label>
    <ul>
      <li v-for="(item, index) in weekDayItems" :key="index">
        <InputCheckbox
          v-model="weekDay"
          :value="item.value"
          @checkCheck="chkItem"
          class="buttonStyle"
        >
          {{ item.label }}
        </InputCheckbox>
      </li>
    </ul>

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
      chkbox_allChk: false,
    };
  },
  methods: {
    allChkBtn() {
      this.weekDay = [];
      if (!this.chkbox_allChk) {
        this.weekDayItems.forEach((e) => {
          this.weekDay.push(e.value);
        });
      }
    },
    chkItem() {
      if (
        this.weekDay.length === this.weekDayItems.length &&
        !this.chkbox_allChk
      ) {
        this.chkbox_allChk = true;
      } else {
        this.chkbox_allChk = false;
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
