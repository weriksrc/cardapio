import BaseService from "../BaseService";

class Pedidos extends BaseService {
  constructor(id) {
    super(id);
  }

  resource() {
    return "pedidos";
  }

  relationship() {
    return {};
  }
}

export default (id) => new Pedidos(id);
