export default {
  async actionProdutoSelect({ commit }, produto) {
    commit("setCurrentProduto", produto);
  },

  async actionSelectProdutoCarForEdition({ commit, state }, key) {
    let produto = state.cart.produtos[key];
    Object.assign(produto, { keyCart: key });
    commit("setCurrentProduto", produto);
  },

  async actionCartProdutoEdite({ commit }, key, newValue) {
    commit("setCartProdutoEdite", key, newValue);
  },

  actionAddCurrentProdutoInCart({ commit }) {
    commit("setAddCurrentProdutoInCart");
  },
  actionSelectProdutoCarForDestroy({ commit }, key) {
    commit("setSelectProdutoCarForDestroy", key);
  },
};
