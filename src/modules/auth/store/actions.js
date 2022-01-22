export default {
  async actionToken({ commit }, token) {
    console.log("actionToken", token);
    await commit("setToken", token);
  },
};
