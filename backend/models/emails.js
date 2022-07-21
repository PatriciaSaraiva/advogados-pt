const connection = require("../config");
const db = connection.promise();

const create = ({ subject, field, fullname, email, phone, message }) => {
  return db
    .query("INSERT INTO emails SET ?", {
      subject,
      field,
      fullname,
      email,
      phone,
      message,
    })
    .then(([result]) => {
      const id = result.insertId;
      return { id, subject, field, fullname, email, phone, message };
    });
};

module.exports = { create };
