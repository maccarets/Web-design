import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/tutorials");
  }

  getUser() {
    return http.get(`/getUser`);
  }

  create(data) {
    return http.post("/addUser", data);
  }
  singVer(data){
    return http.post("/singVer", data)
  }

  update(id, data) {
    return http.put(`/updateUser/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new UserDataService();
