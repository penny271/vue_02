import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      //- Age.vue, DateOfBirth.vueより
      questionGender: '-性別-',
      questionDateOfBirth: '-生年月日-',
      //- 回答結果に反映されるもの
      gender:'未回答',
      year: 1990,
      month: 1,
      date: 1,

      //- Insurance.vueより
      questionInsurance: '現在、生命保険に加入されていますか？',
      questionHospital: '現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術を勧められたことはありますか？',
      questionPast: '過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことはありますか？',
      //- 回答結果に反映されるもの
      insuranceAnswer: '未回答',
      hospitalAnswer: '未回答',
      pastAnswer: '未回答',

      //- Consulting.vueより
      questionDetail: '-ご相談内容-',
      //- 回答結果に反映されるもの
      detail:'',
   },
   getters: {
      gender: state => state.gender,
      year: state => state.year,
      month: state => state.month,
      date: state => state.date,
      insuranceAnswer: state => state.insuranceAnswer,
      hospitalAnswer: state => state.hospitalAnswer,
      pastAnswer: state => state.pastAnswer,
      detail: state => state.detail,
   },
   mutations: {
      gender: (state, newGender) => {
         state.gender = newGender
      },
      year: (state, newYear) => {
         state.year = newYear
      },
      month: (state, newMonth) => {
         state.month = newMonth
      },
      date: (state, newDate) => {
         state.date = newDate
      },
      insuranceAnswer: (state, newInsuranceAnswer) => {
         state.insuranceAnswer = newInsuranceAnswer
      },
      hospitalAnswer: (state, newHospitalAnswer) => {
         state.hospitalAnswer = newHospitalAnswer
      },
      pastAnswer: (state, newPastAnswer) => {
         state.pastAnswer = newPastAnswer
      },
      detail: (state, newDetail) => {
         state.detail = newDetail
      },
   },
   actions: {}
})
