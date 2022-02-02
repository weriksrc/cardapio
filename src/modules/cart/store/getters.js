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

    produto.produtos_adicionais.map((produtoAdicional) => {
      if (produtoAdicional.quantidade) {
        totalAdicionais +=
          parseFloat(produtoAdicional.quantidade) *
          parseFloat(produtoAdicional.adicional.valor_venda);
      }
    });

    let valorVenda = parseFloat(produto.valor_venda);
    let quantidade = parseFloat(produto.quantidade);
    let totalProduto = (valorVenda + totalAdicionais) * quantidade;

    return totalProduto;
  },
};
