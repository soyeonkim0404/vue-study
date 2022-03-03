<template>
  <container>
    <div class="row">
      <form-item>
        <template #label>라디오</template>
        <template #val>
          <ul class="radio-list">
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
        </template>
      </form-item>
      <form-item>
        <template #label>체크박스</template>
        <template #val>
          <div class="checkbox-area">
            <InputAllCheckbox
              class="all-type2"
              v-model="weekDayItems.week_allChk.value"
              :weekDayItems="
                weekDayItems.text
                  .filter((el) => !el.disabled && !el.dataDisabled)
                  .map((el) => el.value)
              "
              :weekChkArray.sync="weekDayItems.weekDay"
              :disabled="weekDayItems.week_allChk.disabled"
            >
              전체 체크
            </InputAllCheckbox>
            <ul class="week-chk">
              <li v-for="(item, index) in weekDayItems.text" :key="index">
                <inputCheckbox
                  v-model="weekDayItems.weekDay"
                  :value="item.value"
                  :disabled="item.disabled"
                  :dataDisabled="item.dataDisabled"
                  class="type2"
                >
                  {{ item.label }}
                </inputCheckbox>
              </li>
            </ul>
          </div>
          <!--디스에이블드 체크-->
          <inputCheckbox
            v-model="weekDayItems.disabledOption.chk"
            class="mt10"
            @formChange="allDisable"
          >
            {{ weekDayItems.disabledOption.disabledText }}
          </inputCheckbox>
        </template>
      </form-item>
      <form-item>
        <template #label>첨부파일</template>
        <template #val>
          <form-file />
        </template>
      </form-item>
    </div>
  </container>
</template>
<script>
import formFile from '../components/form-file';
import inputCheckbox from '../components/input-checkbox';
import InputAllCheckbox from '../components/InputAllCheckbox';
import formItem from '../components/form/form-item';
import InputRadio from '@/components/Input-radio';
export default {
  name: 'form-page',
  components: {
    formFile,
    inputCheckbox,
    InputAllCheckbox,
    formItem,
    InputRadio,
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
        week_allChk: {
          value: false,
        },
        weekDay: [],
        text: [
          {
            label: '월',
            value: 'monday',
            dataDisabled: true,
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
        disabledOption: {
          chk: false,
          disabledText: '대면 상담을 진행하지 않습니다.',
        },
      },
      testApi: null,
    };
  },
  methods: {
    allDisable(event) {
      if (event) {
        this.weekDayItems.week_allChk.disabled = true;
        const filterArray = this.weekDayItems.text.filter(
          (el) => !el.dataDisabled
        );
        filterArray.forEach((el) => (el.disabled = true));
      } else {
        this.weekDayItems.week_allChk.disabled = false;
        this.weekDayItems.text.forEach((el) => {
          return (el.disabled = false);
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.wrap {
  flex-direction: column;
  align-items: initial;
}
.row {
  width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: #868e96;
  border-radius: 10px;
}
</style>
