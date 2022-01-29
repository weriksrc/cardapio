export default {
  getUser: (state) => JSON.parse(localStorage.getItem("user")),
};
