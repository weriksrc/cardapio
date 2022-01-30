export default {
  getProdutos: (state) => state.produtos,

  getProduto: (state) => (key) => {
    console.log("getProduto", state.produtos[key]);
    return state.produtos[key];
  },

  getValorTotal(state, getters) {
    let totalCarrinho = 0;
    state.produtos.map((produto) => {
      totalCarrinho += getters.calculaValorTotalProdutoComAdicionais(produto);
    });
    return totalCarrinho;
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
