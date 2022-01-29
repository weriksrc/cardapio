import BaseService from "../BaseService";

class AuthMesas extends BaseService {
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
