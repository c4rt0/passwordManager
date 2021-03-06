const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const { encrypt, decrypt } = require("./encryptionHandler");
// remember so that the port is different than client's ports
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root_password",
  database: "PasswordManager",
});
//

app.post("/addpassword", (req, res) => {
  const { user, password, service } = req.body;
  const hashedPassword = encrypt(password);
  console.log("Passed up to here");
  db.query(
    "INSERT INTO passwords (user, password, service, iv) VALUES (?,?,?,?)",
    [user, hashedPassword.password, service, hashedPassword.iv],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Success!");
      }
    }
  );
  console.log("Data saved.");
});

// listen on port...
app.listen(PORT, () => {
  console.log("Server is running");
});
