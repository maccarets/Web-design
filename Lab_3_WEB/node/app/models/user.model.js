module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("userProfill", {
    name: {
      type: Sequelize.TEXT
    },
    mail: {
      type: Sequelize.TEXT
    },
    pass: {
      type: Sequelize.TEXT
    },
    age: {
      type: Sequelize.TEXT
    },
    sex: {
      type: Sequelize.TEXT
    },
    surname: {
      type: Sequelize.TEXT
    }

  });

  return User;
};
