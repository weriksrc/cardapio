export default {
  setTotalAdicionais(state, total) {
    console.log("mutation", total);
    state.totalAdicionais = total;
  },
};
