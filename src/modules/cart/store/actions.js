export default {
  async actionEditeProduto({ commit }, newValue) {
    commit("setEditeProduto", newValue);
  },

  actionAddProduto({ commit }, produto) {
    commit("setAddProduto", produto);
  },
  actionDestroyProduto({ commit }, key) {
    commit("setDestroyProduto", key);
  },
};
