const dateTimeToHours = {
  zeroLeft(value) {
    return value < 10 ? `0${value}` : value;
  },
  install(Vue) {
    Vue.filter("dateTimeToHours", (value) => {
      if (!value) return "";
      let date = new Date(value);
      return `
        ${this.zeroLeft(date.getHours())}:
        ${this.zeroLeft(date.getMinutes())}:
        ${this.zeroLeft(date.getSeconds())}`;
    });
  },
};

export default dateTimeToHours;
