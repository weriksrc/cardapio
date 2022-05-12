import BaseHttp from "../BaseHttp";
import produtos from "./Produtos";

class Categorias extends BaseHttp {
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
