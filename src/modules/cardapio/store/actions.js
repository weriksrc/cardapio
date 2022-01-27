export default {
  async actionProdutoSelect({ commit }, produto) {
    commit("setCurrentProduto", produto);
  },
};
