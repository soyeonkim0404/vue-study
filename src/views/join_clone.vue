<template>
  <div class="contents">
    <div class="row">
      <h2 class="mt40">
        기본 정보를 입력 후,<br />
        회원가입을 완료해주세요
      </h2>
      <form action="#">
        <form-item>
          <template #label>이름</template>
          <template #val>
            <inputText v-model="form.name" :disabled="form.name.length > 0" />
          </template>
        </form-item>
        <form-item>
          <template #label>휴대폰 번호</template>
          <template #val>
            <inputText v-model="form.phone" :disabled="form.phone.length > 0" />
          </template>
        </form-item>
        <form-item>
          <template #label>아이디</template>
          <template #val>
            <inputText
              v-model="form.id.value"
              :placeholder="form.id.placeholder"
            />
            <span class="bullet-txt mt10">
              아이디는 최소 3글자 이상 입력해주세요.
            </span>
          </template>
        </form-item>
        <form-item>
          <template #label>비밀번호</template>
          <template #val>
            <inputText
              v-model="form.password.value"
              :placeholder="form.password.placeholder"
            />
            <span class="bullet-txt mt10">
              비밀번호는 영문/숫자/특수문자 2가지 이상 조합으로 6~12자이어야
              합니다.
            </span>
          </template>
        </form-item>
        <form-item>
          <template #label>비밀번호 확인</template>
          <template #val>
            <inputText
              v-model="form.checkPassword.value"
              :placeholder="form.checkPassword.placeholder"
            />
          </template>
        </form-item>
        <form-item>
          <template #label>이메일</template>
          <template #val>
            <div class="form-flex">
              <inputText
                v-model="form.email.value"
                :placeholder="form.email.placeholder"
              />
              <formSelect
                v-model="form.email.select.value"
                :options="form.email.select.options"
                :placeholder="form.email.select.placeholder"
                :name="form.email.select.name"
              />
            </div>
          </template>
        </form-item>
        <form-item>
          <template #label>채딩상담 가능 시간</template>
          <template #val>
            <div class="form-flex">
              <span class="checkbox-area">
                <InputAllCheckbox
                  class="all-type2"
                  v-model="form.weekDayItems.week_allChk.value"
                  :weekDayItems="
                    form.weekDayItems.text
                      .filter((el) => !el.disabled && !el.dataDisabled)
                      .map((el) => el.value)
                  "
                  :weekChkArray.sync="form.weekDayItems.weekDay"
                  :disabled="form.weekDayItems.week_allChk.disabled"
                >
                  전체
                </InputAllCheckbox>
                <ul class="week-chk">
                  <li
                    v-for="(item, index) in form.weekDayItems.text"
                    :key="index"
                  >
                    <inputCheckbox
                      v-model="form.weekDayItems.weekDay"
                      :value="item.value"
                      :disabled="item.disabled"
                      :dataDisabled="item.dataDisabled"
                      class="type2"
                    >
                      {{ item.label }}
                    </inputCheckbox>
                  </li>
                </ul>
              </span>
              <span class="time">
                <formSelect
                  v-model="form.time.start.value"
                  :options="form.time.start.options"
                  :placeholder="form.time.start.placeholder"
                  :name="form.time.start.name"
                />
                <span class="dash">~</span>
                <formSelect
                  v-model="form.time.end.value"
                  :options="form.time.end.options"
                  :placeholder="form.time.end.placeholder"
                  :name="form.time.end.name"
                />
              </span>
            </div>
            <inputCheckbox
              v-model="form.weekDayItems.disabledOption.chk"
              class="mt10"
              @formChange="allDisable"
            >
              {{ form.weekDayItems.disabledOption.disabledText }}
            </inputCheckbox>
          </template>
        </form-item>
      </form>
    </div>
  </div>
</template>

<script>
import formItem from '../components/form/form-item';
import inputText from '@/components/InputText';
import formSelect from '@/components/form-select';
import inputCheckbox from '@/components/input-checkbox';
import InputAllCheckbox from '@/components/InputAllCheckbox';
export default {
  name: 'join_clone',
  components: {
    formItem,
    inputText,
    formSelect,
    inputCheckbox,
    InputAllCheckbox,
  },
  data() {
    return {
      form: {
        name: '김소연',
        phone: '010-1234-5678',
        id: {
          value: '',
          placeholder: '아이디를 입력해주세요',
        },
        password: {
          value: '',
          placeholder: '비밀번호를 입력해주세요.',
        },
        checkPassword: {
          value: '',
          placeholder: '비밀번호를 한번 더 입력해주세요.',
        },
        email: {
          value: '',
          placeholder: '이메일을 입력해주세요.',
          select: {
            name: '이메일 선택',
            value: '',
            placeholder: '선택',
            options: [
              {
                value: 'naver',
                label: 'naver.com',
              },
              {
                value: 'google',
                label: 'gmail.com',
              },
            ],
          },
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
        time: {
          start: {
            value: '',
            placeholder: '상담시작 시간',
            name: '상담시작 시간',
            options: [
              {
                value: '09:00',
                label: '09:00',
              },
              {
                value: '09:30',
                label: '09:30',
              },
            ],
          },
          end: {
            value: '',
            placeholder: '상담종료 시간',
            name: '상담종료 시간',
            options: [
              {
                value: '18:00',
                label: '18:00',
              },
              {
                value: '18:30',
                label: '18:30',
              },
            ],
          },
        },
      },
    };
  },
  methods: {
    allDisable(event) {
      if (event) {
        this.form.weekDayItems.week_allChk.disabled = true;
        const filterArray = this.form.weekDayItems.text.filter(
          (el) => !el.dataDisabled
        );
        filterArray.forEach((el) => (el.disabled = true));
      } else {
        this.form.weekDayItems.week_allChk.disabled = false;
        this.form.weekDayItems.text.forEach((el) => {
          return (el.disabled = false);
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  width: 1024px;
  margin: 0 auto;
  padding: 40px;
  background: #343a40;
}

h2 {
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  color: #fff;
}
.item {
  margin-top: 50px;
  & + .item {
    margin-top: 30px;
  }
}

::v-deep .input-text {
  input {
    height: 44px;
    padding: 12px 15px;
    font-size: 14px;
  }
}

.form-flex {
  display: flex;
  span {
    flex: 0 0 calc((100% - 10px) / 2);
    & + span {
      margin-left: 10px;
    }
  }
  .time {
    display: flex;
    span {
      flex: 0 0 calc((100% - 30px) / 2);
      margin-left: 0;
    }
    .dash {
      flex: 0 0 25px;
      justify-content: center;
      align-items: center;
      display: flex;
      color: #fff;
    }
  }
}
</style>
