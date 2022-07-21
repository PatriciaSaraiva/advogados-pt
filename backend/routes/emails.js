const emailRouter = require("express").Router();
const Email = require("../models/emails");

emailRouter.post("/", (req, res) => {
  Email.create(req.body)
    .then((contact) => {
      return res.status(201).send(contact);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = emailRouter;
