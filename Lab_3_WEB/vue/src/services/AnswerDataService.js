import http from "../http-common";

class AnswerDataService {

  getAnswer(id) {
    return http.get(`/getAnswer/${id}`);
  }
}

export default new AnswerDataService();
