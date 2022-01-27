export default {
  async setCurrentProduto(state, produto) {
    await Object.assign(state.currentProduto, produto);
  },

  async setCartProdutoEdite(state, key, newValue) {
    state.cart.produtos[key] = newValue;
  },

  setAddCurrentProdutoInCart(state) {
    if (state.currentProduto.hasOwnProperty("keyCart")) {
      state.cart.produtos[state.currentProduto.idCart] = state.currentProduto;
      return;
    }
    state.cart.produtos.push(state.currentProduto);
  },

  setSelectProdutoCarForDestroy(state, key) {
    state.cart.produtos.splice(key, 1);
  },
};
