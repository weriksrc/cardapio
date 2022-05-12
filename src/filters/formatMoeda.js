const formatMoeda = {
  install(Vue) {
    Vue.filter("formatMoeda", function (value, locale = "pt-br") {
      return value.toLocaleString(locale, {
        style: "currency",
        currency: "BRL",
      });
    });
  },
};

export default formatMoeda;
