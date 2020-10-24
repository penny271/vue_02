const state = {
  //- Age.vue, DateOfBirth.vueより
  questionGender: "-性別-",
  questionDateOfBirth: "-生年月日-",
  //- 回答結果に反映されるもの
  gender: "未回答",
  year: 1990,
  month: 1,
  date: 1,
};

const getters = {
  gender: (state) => state.gender,
  year: (state) => state.year,
  month: (state) => state.month,
  date: (state) => state.date,
};

const mutations = {
  gender: (state, newGender) => {
    state.gender = newGender;
  },
  year: (state, newYear) => {
    state.year = newYear;
  },
  month: (state, newMonth) => {
    state.month = newMonth;
  },
  date: (state, newDate) => {
    state.date = newDate;
  },
};

export default {
   state,
   getters,
   mutations,
}
