import http from "@/http";

export default class BaseService {
  id = "";
  uri = "";
  uriRelationship = "";

  constructor(id = "") {
    this.id = id;
    this.uri = this.initializeUri();
    this.initiazileRelationships();
  }

  show(params = {}) {
    if (!(typeof params === "object")) {
      this.uri += `/${params}`;
    }
    return http.get(this.uri, { params });
  }

  store(form) {
    return http.post(this.uri, form);
  }

  destroy(params) {
    return http.delete(this.uri, { params });
  }

  update(form) {
    return http.put(this.uri, form);
  }

  async initiazileRelationships() {
    for (const key in this.relationship()) {
      this[key] = (id) => {
        this.uri +=
          "/" + this.relationship()[key].resource() + (id ? "/" + id : "");
        return this;
      };
    }
  }

  initializeUri() {
    if (this.id == "") {
      return (this.uri = this.resource());
    }
    return `${this.resource()}/${this.id}`;
  }
}
