export default {
  async actionTotalAdicionais({ commit }, total) {
    await commit("setTotalAdicionais", total);
  },

  async actionAdicionaisCheck({ commit }, adicionais) {
    await commit("setAdicionaisCheck", adicionais);
  },

  async actionProdutoSelect({ commit }, produto) {
    await commit("setProdutoSelect", produto);
  },

  async actionQuantidadeCurrentProduto({ commit }, quantidade) {
    await commit("setQuantidadeCurrentProduto", quantidade);
  },

  async actionObervacaoCurrentProduto({ commit }, observacao) {
    await commit("setObervacaoCurrentProduto", observacao);
  },

  async actionAddCurrentProdutoInCart({ commit }) {
    await commit("setAddCurrentProdutoInCart");
  },
};
