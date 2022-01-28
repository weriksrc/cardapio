export default {
  async setEditeProduto(state, newValue) {
    state.produtos[newValue.keyCart] = newValue;
  },

  setAddProduto(state, produto) {
    state.produtos.push(produto);
  },

  setDestroyProduto(state, key) {
    state.produtos.splice(key, 1);
  },

  setClearProdutosCart(state) {
    console.log("setClearProdutosCart");
    state.produtos = [];
  },
};
