const commonMixin = {
  methods: {
    basicDate() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const weekNm = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const week = weekNm[today.getDay()];
      today = mm + '/' + dd + ' ' + week;
      return today;
    },
  },
};

export { commonMixin };
