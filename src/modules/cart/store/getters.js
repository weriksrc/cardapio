export default {
  getProdutos: (state) => state.produtos,

  getProduto: (state) => (key) => {
    console.log("getProduto", state.produtos[key]);
    return state.produtos[key];
  },
};
