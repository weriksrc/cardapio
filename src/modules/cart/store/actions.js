export default {
  async actionEditeProduto({ commit, getters }, newValue) {
    let totalComAdicionais =
      getters.calculaValorTotalProdutoComAdicionais(newValue);
    newValue.totalComAdicionais = totalComAdicionais;
    commit("setEditeProduto", newValue);
  },

  actionAddProduto({ commit, getters }, produto) {
    let totalComAdicionais =
      getters.calculaValorTotalProdutoComAdicionais(produto);
    produto.totalComAdicionais = totalComAdicionais;
    commit("setAddProduto", produto);
  },
  actionDestroyProduto({ commit }, key) {
    commit("setDestroyProduto", key);
  },

  actionClearProdutosCart({ commit }) {
    commit("setClearProdutosCart");
  },
};
