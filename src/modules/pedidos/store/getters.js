export default {
  getTotalAdicionais: (state) => state.totalAdicionais,
  getCurrentProduto: (state) => state.currentProduto,
  getQuantidadeCurrentProduto: (state) => state.currentProduto.quantidade,
  getTotalCurrentProduto: (state) => {
    return (
      state.currentProduto.quantidade *
      (state.currentProduto.valor_venda + state.totalAdicionais)
    );
  },
  getObservacaoCurrentProduto: (state) => state.currentProduto.observacao,
};
