const db = require("../models");
const Answer = db.answer
const Qastion = db.qastion
const Op = db.Sequelize.Op;


exports.getAnswer = (req, res) => {
  const id = req.params.id;

    Answer.findAll({where:{qastionID:id}})
        .then(resalt => {
            if (resalt.length != 0) {
                res.send(resalt);

            }
            else {
                res.send({ exist: 0 });
            }
        });
       
};



exports.createBD = (req, res) => {

  var data = {
    qastionID: 1 ,
    text:"For special needs",
    proc : 20
  };

  Answer.create(data)

  var data = {
    qastionID: 1 ,
    text:"For personal protection",
    proc : 58
  };

  Answer.create(data)


  var data = {
    qastionID: 1 ,
    text:"I'm against",
   proc : 22
  };

  Answer.create(data)

  var data = {
    text:"<header>How do you feel about Ukrainians owning weapons?</header>"
  };


  Qastion.create(data)

};





