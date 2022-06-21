import http from "../http-common";

class QastionDataService {

  getQastion(id) {
    return http.get(`/getQuestions/${id}`);
  }
  puchAnswer(data){
    return http.post("/puchAnswer", data);
  }
}

export default new QastionDataService();
