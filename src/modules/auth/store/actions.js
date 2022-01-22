export default {
  async actionToken({ commit }, token) {
    await commit("setToken", token);
  },
};
