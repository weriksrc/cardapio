export default {
  getTotalAdicionais: (state) => state.totalAdicionais,
  getCurrentProduto: (state) => state.currentProduto,
  getQuantidadeCurrentProduto: (state) => state.currentProduto.quantidade,
  getTotalCurrentProduto: (state) => {
    return (
      state.currentProduto.quantidade *
      (parseFloat(state.currentProduto.valor_venda) +
        parseFloat(state.totalAdicionais))
    );
  },
  getObservacaoCurrentProduto: (state) => state.currentProduto.observacao,

  getCart: (state) => state.cart,
};
