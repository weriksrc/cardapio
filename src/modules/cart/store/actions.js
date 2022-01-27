export default {
  async actionEditeProduto({ commit }, newValue) {
    commit("setEditeProduto", newValue);
  },

  actionAddProduto({ commit, getters }, produto) {
    let totalComAdicionais =
      getters.calculaValorTotalProdutoComAdicionais(produto);
    Object.assign(produto, { totalComAdicionais });
    commit("setAddProduto", produto);
  },
  actionDestroyProduto({ commit }, key) {
    commit("setDestroyProduto", key);
  },
};
