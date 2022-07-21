const emailRouter = require("./routes/emails");
const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = express.Router();

const connection = require("./config");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 5001;

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database");
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/send-email", emailRouter);

function startServer() {
  server.listen(port, function () {
    console.log("Express server listening on ", port);
  });
}

setImmediate(startServer);
