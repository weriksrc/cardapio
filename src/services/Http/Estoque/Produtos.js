import BaseHttp from "../BaseHttp";

class Produtos extends BaseHttp {
  constructor(id) {
    super(id);
  }

  resource() {
    return "/api/produtos";
  }

  relationship() {
    return {};
  }
}

export default (id) => new Produtos(id);
