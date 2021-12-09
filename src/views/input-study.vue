<template>
  <div class="wrap">
    <div class="page-title">checkbox buttons</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>

    <span>{{ checkedNames }}</span>

    <div class="page-title">radio buttons</div>
    <InputRadio v-model="gender" :items="genderItems" />
    <InputRadio v-model="fruit" :items="fruitItems" class="buttonStyle" />
  </div>
</template>

<script>
import InputRadio from '../components/InputRadio';
export default {
  name: 'input-study',
  components: {
    InputRadio,
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
      checkedNames: [],
    };
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
