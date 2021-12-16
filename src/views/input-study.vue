<template>
  <div class="input-area">
    <div class="page-title">checkbox buttons</div>

    <div class="checkbox-area">
      <InputAllCheckbox
        class="buttonStyle all"
        v-model="weekDayItems.week_allChk"
        :weekDayItems="weekDayItems.option"
        :weekChkArray="weekDayItems.weekDay"
        @checkChange="allChkBtn"
      >
        전체 체크
      </InputAllCheckbox>

      <ul class="custom-chk">
        <li v-for="(item, index) in weekDayItems.option" :key="index">
          <InputCheckbox
            v-model="weekDayItems.weekDay"
            :value="item.value"
            class="buttonStyle"
            @checkChange="allChkOnChange"
          >
            {{ item.label }}
          </InputCheckbox>
        </li>
      </ul>
    </div>

    <div class="page-title" style="margin-top: 100px">radio buttons</div>
    <span class="qa-txt">성별을 체크하시오</span>
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

    <span class="qa-txt">배송지를 선택하시오</span>

    <div class="delivery-sel">
      <InputRadio
        id="attr"
        class="buttonStyle"
        v-model="radioOption"
        val="최근배송지"
        name="delivery-option"
      >
        최근배송지
      </InputRadio>
      <InputRadio
        class="buttonStyle"
        v-model="radioOption"
        val="과거배송지"
        name="delivery-option"
      >
        과거배송지
      </InputRadio>
    </div>
  </div>
</template>

<script>
import InputRadio from '../components/InputRadio';
import InputCheckbox from '../components/InputCheckbox';
import InputAllCheckbox from '../components/InputAllCheckbox';

export default {
  name: 'input-study',
  components: {
    InputRadio,
    InputCheckbox,
    InputAllCheckbox,
  },
  data() {
    return {
      genderItems: {
        gender: '',
        option: [
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
      radioOption: null,
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
    allChkOnChange() {
      this.weekDayItems.week_allChk =
        this.weekDayItems.option.length === this.weekDayItems.weekDay.length;
    },
  },
};
</script>

<style scoped lang="scss">
.input-area {
  ul {
    padding: 0;
    margin: 20px 0 0 0;
    li {
      display: inline-flex;
      & + li {
        margin-left: 20px;
      }
    }
  }

  .custom-chk {
    display: inline-flex;
    margin: 0;
    li {
      display: inline-flex;
      &:first-child {
        label {
          border-left: solid 1px #ffa8a8;
        }
      }
      & + li {
        margin: 0;
      }
    }
  }

  .delivery-sel {
    display: inline-flex;
    margin-top: 10px;
    label + label {
      margin-left: 10px;
    }
  }

  .qa-txt {
    display: block;
    margin-top: 55px;
    font-size: 1.5rem;
  }

  .all {
    display: inline-flex;
    width: 120px;
    height: 50px;
    border-left: solid 1px #ffa8a8;
    border-right: none;
  }

  .checkbox-area {
    margin-top: 30px;
  }

  .allChecked {
    background: #ffa8a8;
    span {
      color: #fff;
    }
  }
}
</style>
