export default {
  getCurrentProduto: (state) => state.currentProduto,

  getTotalCurrentProduto: (state, getters) => {
    return getters.calculaValorTotalProdutoComAdicionais(state.currentProduto);
  },

  calculaValorTotalProdutoComAdicionais: () => (produto) => {
    let totalAdicionais = 0;

    produto.adicionais.map((adicional) => {
      if (adicional.check) {
        totalAdicionais +=
          parseFloat(adicional.quantidade) * parseFloat(adicional.valor_venda);
      }
    });

    let valorVenda = parseFloat(produto.valor_venda);
    let quantidade = parseFloat(produto.quantidade);
    let totalProduto = (valorVenda + totalAdicionais) * quantidade;

    return totalProduto;
  },
};
