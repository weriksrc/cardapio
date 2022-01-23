export default {
  async actionTotalAdicionais({ commit }, total) {
    await commit("setTotalAdicionais", total);
  },
};
