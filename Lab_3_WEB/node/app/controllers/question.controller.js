const db = require("../models");
const Qastion = db.qastion
const Op = db.Sequelize.Op;


exports.getQastion = (req, res) => {
  const id = req.params.id;

    Qastion.findAll({
        where: { id: id }
    })
        .then(resalt => {
            if (resalt.length != 0) {
                res.send(resalt[0]);

            }
            else {
                res.send({ exist: 0 });
            }
        });
       
};


exports.puchAnswer = (req, res) => {
        session=req.session;
        session.answer=req.body.selectedAnswer;
        console.log(req.session)
        res.status(200).send("OK");
       
};
