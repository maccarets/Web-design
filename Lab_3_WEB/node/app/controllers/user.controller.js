const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

  const user_data = {
    name: req.body.name,
    mail:req.body.mail,
    pass: req.body.pass ,
    age:req.body.age,
    sex: req.body.sex,
    surname: req.body.surname



  };

  // Save Tutorial in the database
  User.create(user_data)
    .then(data => {
      res.send(user_data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


exports.singVer = (req, res) => {

  const user_data = {

    mail:req.body.mail,
    pass: req.body.pass ,
  };

  // Save Tutorial in the database
  User.findAll({where: {mail: user_data.mail, pass: user_data.pass}})
    .then(resaltUser => {
      if (resaltUser.length != 0){
        session=req.session;
        session.user=resaltUser;
        console.log(req.session)
        res.status(200).send({exist: 1});

      }
      else{
           res.send({exist:0});
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};



// Find a single Tutorial with an id
exports.getUser = (req, res) => {

    if(session.user){
        res.status(200).send({exist: 1,data: session.user[0]});
    }else{
        res.status(200).send({exist: 0});

    }
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        req.session.destroy();
        delete session;
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const userId = req.params.id;

  User.destroy({
    where: { userId: userId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};
