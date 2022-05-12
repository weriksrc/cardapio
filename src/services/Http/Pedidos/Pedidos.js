import BaseHttp from "../BaseHttp";

class Pedidos extends BaseHttp {
  constructor(id) {
    super(id);
  }

  resource() {
    return "/api/pedidos";
  }

  relationship() {
    return {};
  }
}

export default (id) => new Pedidos(id);
