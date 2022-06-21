module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const questions = require("../controllers/question.controller.js");
  const answer = require("../controllers/answer.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/addUser", user.create);

  router.post("/singVer",user.singVer);

  router.get("/getUser",user.getUser);

  router.put("/updateUser/:id", user.update);

  router.get("/getQuestions/:id", questions.getQastion);

  router.get("/getAnswer/:id", answer.getAnswer);

  router.get("/createBD", answer.createBD);

  router.post("/puchAnswer",questions.puchAnswer);


  app.use("/api", router);
};
