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
                  v-model="form.chatOption.allChk.value"
                  :weekDayItems="
                    weekDayItems.text
                      .filter((el) => !el.disabled && !el.dataDisabled)
                      .map((el) => el.value)
                  "
                  :weekChkArray.sync="form.chatOption.weekDayList"
                  :disabled="form.chatOption.allChk.disabled"
                >
                  전체
                </InputAllCheckbox>
                <ul class="week-chk">
                  <li v-for="(item, index) in weekDayItems.text" :key="index">
                    <inputCheckbox
                      v-model="form.chatOption.weekDayList"
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
                  v-model="form.chatOption.startTime"
                  :options="time.start.options"
                  :placeholder="time.start.placeholder"
                  :disabled="time.start.disabled"
                  :name="time.start.name"
                />
                <span class="dash">~</span>
                <formSelect
                  v-model="form.chatOption.endTime"
                  :options="time.end.options"
                  :placeholder="time.end.placeholder"
                  :disabled="time.end.disabled"
                  :name="time.end.name"
                />
              </span>
            </div>
            <inputAllDisable
              class="mt10"
              v-model="form.chatOption.disabledOption.chk"
              :weekDayItems="weekDayItems.text"
              :dataOption="form.chatOption"
              :dataTime="time"
            >
              {{ form.chatOption.disabledOption.disabledText }}
            </inputAllDisable>
          </template>
        </form-item>
        <form-item>
          <template #label>전화상담 가능 시간</template>
          <template #val>
            <div class="form-flex">
              <span class="checkbox-area">
                <InputAllCheckbox
                  class="all-type2"
                  v-model="form.phoneOption.allChk.value"
                  :weekDayItems="
                    weekDayItems.text
                      .filter((el) => !el.disabled && !el.dataDisabled)
                      .map((el) => el.value)
                  "
                  :weekChkArray.sync="form.phoneOption.weekDayList"
                  :disabled="form.phoneOption.allChk.disabled"
                >
                  {{ form.phoneOption.allChk.label }}
                </InputAllCheckbox>
                <ul class="week-chk">
                  <li v-for="(item, index) in weekDayItems.text" :key="index">
                    <inputCheckbox
                      v-model="form.phoneOption.weekDayList"
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
                  v-model="form.phoneOption.startTime"
                  :options="time.start.options"
                  :placeholder="time.start.placeholder"
                  :disabled="time.start.disabled"
                  :name="time.start.name"
                />
                <span class="dash">~</span>
                <formSelect
                  v-model="form.phoneOption.endTime"
                  :options="time.end.options"
                  :placeholder="time.end.placeholder"
                  :disabled="time.end.disabled"
                  :name="time.end.name"
                />
              </span>
            </div>
            <inputAllDisable
              class="mt10"
              v-model="form.phoneOption.disabledOption.chk"
              :weekDayItems="weekDayItems.text"
              :dataOption="form.phoneOption"
              :dataTime="time"
            >
              {{ form.phoneOption.disabledOption.disabledText }}
            </inputAllDisable>
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
import inputAllDisable from '@/components/inputAllDisable';
export default {
  name: 'join_clone',
  components: {
    formItem,
    inputText,
    formSelect,
    inputCheckbox,
    InputAllCheckbox,
    inputAllDisable,
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
        chatOption: {
          allChk: {
            value: false,
          },
          weekDayList: [],
          disabledOption: {
            chk: false,
            disabledText: '채팅상담을 진행하지 않습니다.',
          },
          startTime: '',
          endTime: '',
        },
        phoneOption: {
          allChk: {
            value: false,
            label: 'ALL',
          },
          weekDayList: [],
          disabledOption: {
            chk: false,
            disabledText: '전화상담을 진행하지 않습니다.',
          },
          startTime: '',
          endTime: '',
        },
      },
      weekDayItems: {
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
      },
      time: {
        start: {
          placeholder: '상담시작 시간',
          name: '상담시작 시간',
          options: [
            {
              value: '09:00',
              label: '09:00',
            },
            {
              value: '10:00',
              label: '10:00',
            },
          ],
        },
        end: {
          placeholder: '상담종료 시간',
          name: '상담종료 시간',
          options: [
            {
              value: '18:00',
              label: '18:00',
            },
            {
              value: '19:00',
              label: '19:00',
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.row {
  width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background: #343a40;
  form {
    padding: 0;
  }
}

h2 {
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  color: #fff;
  padding: 0;
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
      flex: 0 0 30px;
      justify-content: center;
      align-items: center;
      display: flex;
      color: #fff;
    }
  }
}
</style>
