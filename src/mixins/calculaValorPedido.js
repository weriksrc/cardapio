export default {
  methods: {
    calculaValorPedido(produto) {
      let totalAdicionais = 0;
      console.log(produto);
      produto.produtos_adicionais?.map((produtoAdicional) => {
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
  },
};
