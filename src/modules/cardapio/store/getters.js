export default {
  getCurrentProduto: (state) => state.currentProduto,

  getTotalCurrentProduto: (state, getters) => {
    return getters.calculaValorTotalProdutoComAdicionais(state.currentProduto);
  },

  getValorTotalProdutosCart(state, getters) {
    let totalCarrinho = 0;
    state.cart.produtos.map((produto) => {
      totalCarrinho += getters.calculaValorTotalProdutoComAdicionais(produto);
    });
    return totalCarrinho;
  },

  calculaValorTotalProdutoComAdicionais: () => (produto) => {
    let totalAdicionais = 0;

    produto.relationships.adicionais.map((adicional) => {
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
