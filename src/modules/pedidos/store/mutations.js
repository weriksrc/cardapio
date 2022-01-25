export default {
  setTotalAdicionais(state, total) {
    state.totalAdicionais = total;
  },

  setAdicionaisCheck(state, adicionais) {
    state.currentProduto.adicionais = adicionais;
  },

  async setProdutoSelect(state, produto) {
    await Object.assign(state.currentProduto, produto);
    // state.currentProduto.produto_id = produto.id;
    // state.currentProduto.quantidade = produto?.quantidade || 1;
    // state.currentProduto.observacao = produto?.observacao || "";
    // state.currentProduto.nome = produto?.nome || "";
    // state.currentProduto.valor_venda = parseFloat(produto?.valor_venda) || 0;
  },

  setQuantidadeCurrentProduto(state, quantidade) {
    state.currentProduto.quantidade = parseFloat(quantidade);
  },

  setObervacaoCurrentProduto(state, observacao) {
    state.currentProduto.observacao = observacao;
  },

  setAddCurrentProdutoInCart(state) {
    state.cart.produtos.push(state.currentProduto);
  },
};
