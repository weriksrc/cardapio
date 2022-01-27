export default {
  async setEditeProduto(state, newValue) {
    state.produtos[newValue.keyCart] = newValue;
  },

  setAddProduto(state, produto) {
    produto.len;
    state.produtos.push(produto);
  },

  setDestroyProduto(state, key) {
    state.produtos.splice(key, 1);
  },
};
