import BaseHttp from "../BaseHttp";

class AuthMesas extends BaseHttp {
  constructor(id = "") {
    super(id);
  }

  resource() {
    return "api/auth/mesas";
  }

  relationship() {
    return {};
  }
}

export default (id) => new AuthMesas(id);
