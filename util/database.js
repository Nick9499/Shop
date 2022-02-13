const Sequalize = require("sequelize");

const sequalize = new Sequalize("node-complete", "root", "Nick736101***", {
  dialect: "mysql",
});

module.exports = sequalize;
