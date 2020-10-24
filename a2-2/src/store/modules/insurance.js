const state = {
  //- Insurance.vueより
  questionInsurance: "現在、生命保険に加入されていますか？",
  questionHospital:
    "現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術を勧められたことはありますか？",
  questionPast:
    "過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことはありますか？",
  //- 回答結果に反映されるもの
  insuranceAnswer: "未回答",
  hospitalAnswer: "未回答",
  pastAnswer: "未回答",
};

const getters = {
  insuranceAnswer: (state) => state.insuranceAnswer,
  hospitalAnswer: (state) => state.hospitalAnswer,
  pastAnswer: (state) => state.pastAnswer,
};

const mutations = {
  insuranceAnswer: (state, newInsuranceAnswer) => {
    state.insuranceAnswer = newInsuranceAnswer;
  },
  hospitalAnswer: (state, newHospitalAnswer) => {
    state.hospitalAnswer = newHospitalAnswer;
  },
  pastAnswer: (state, newPastAnswer) => {
    state.pastAnswer = newPastAnswer;
  },
};

export default {
   state,
   getters,
   mutations,
}
