module.exports = (sequelize, Sequelize) => {
  const Qastion = sequelize.define("qastions", {
    text: {
      type: Sequelize.TEXT
    }

  });

  return Qastion;
};
