import BaseService from "../BaseService";
import produtos from "./Produtos";

class Categorias extends BaseService {
  constructor(id = "") {
    super(id);
  }

  resource() {
    return "/api/categorias";
  }

  relationship() {
    return {
      produtos: produtos(),
    };
  }
}

export default (id) => new Categorias(id);
