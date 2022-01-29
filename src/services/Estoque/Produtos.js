import BaseService from "../BaseService";

class Produtos extends BaseService {
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
