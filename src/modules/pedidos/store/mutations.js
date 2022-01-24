export default {
  setTotalAdicionais(state, total) {
    console.log("mutation", total);
    state.totalAdicionais = total;
  },

  setAdicionaisCheck(state, adicionais) {
    state.currentProduto.adicionais = adicionais;
  },

  setProdutoSelect(state, produto) {
    state.currentProduto.produto_id = produto.id;
    state.currentProduto.quantidade = produto?.quantidade || 1;
    state.currentProduto.observacao = produto?.observacao || "";
    state.currentProduto.nome = produto?.nome || "";
    state.currentProduto.valor_venda = parseFloat(produto?.valor_venda) || 0;
  },

  setQuantidadeCurrentProduto(state, quantidade) {
    state.currentProduto.quantidade = parseFloat(quantidade);
  },

  setObervacaoCurrentProduto(state, observacao) {
    state.currentProduto.observacao = observacao;
  },

  setAddCurrentProdutoCart(state) {
    let itemCart = {
      produto_id: state.currentProduto.produto_id,
      quantidade: state.currentProduto.quantidade,
      observacao: state.currentProduto.observacao,
    };

    if (state.currentProduto.adicionais.length > 0) {
      Object.assign(itemCart, { adicionais: state.currentProduto.adicionais });
    }
    state.cart.produtos.push(itemCart);
  },
};
