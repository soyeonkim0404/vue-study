<template>
  <div class="content">
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
              v-model="weekDayItems.week_allChk"
              :weekDayItems="
                weekDayItems.text
                  .filter((el) => !el.disabled)
                  .map((el) => el.value)
              "
              :weekChkArray.sync="weekDayItems.weekDay"
            >
              전체 체크
            </InputAllCheckbox>
            <ul class="week-chk">
              <li v-for="(item, index) in weekDayItems.text" :key="index">
                <inputCheckbox
                  v-model="weekDayItems.weekDay"
                  :value="item.value"
                  :disabled="item.disabled"
                  class="type2"
                >
                  {{ item.label }}
                </inputCheckbox>
              </li>
            </ul>
          </div>
          <!--디스에이블드 체크-->
          <inputCheckbox v-model="weekDayItems.disabledOption.chk" class="mt10">
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
  </div>
</template>

<script>
import { testApi } from '@/api';
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
        week_allChk: false,
        weekDay: [],
        text: [
          {
            label: '월',
            value: 'monday',
            disabled: true,
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
  created() {
    this.testCallApi();
  },
  methods: {
    async testCallApi() {
      try {
        const { data: response } = await testApi({
          qnaSno: 1,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.row {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  background: #343a40;
  border-radius: 10px;
}
</style>
