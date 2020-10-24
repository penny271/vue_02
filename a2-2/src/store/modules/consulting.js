const state = {
  //- Consulting.vueより
  questionDetail: "-ご相談内容-",
  //- 回答結果に反映されるもの
  detail: "",
};

const getters = {
  detail: (state) => state.detail,
};

const mutations = {
  detail: (state, newDetail) => {
    state.detail = newDetail;
  },
};

export default {
  state,
  getters,
  mutations,
};
