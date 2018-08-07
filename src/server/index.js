require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const salesForce = require("./config/salesforce");

const PORT = process.env.PORT || 8000;
const app = express();

// const awards = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/kudos", (req, res) => {
  salesForce
    .query(
      "SELECT id, Name, Comment__c, Receiver__r.Name, Sender__r.Name, Sender__r.email__c, LastModifiedDate FROM Kudos__c WHERE Receiver__r.Name != NULL AND Sender__r.Name = 'Donald J Trump'"
    )
    .then(data => {
      console.log(data.records.map(record => record._fields));
      res.json(data.records.map(record => record._fields));
    });
});

app.get("/api/users", (req, res) => {
  salesForce
    .query("SELECT id, Name, email__c FROM Tiny_Improvements_User__c")
    .then(data => {
      //   console.log("test emai" + data.email__c);
      res.json(data.records.map(record => record._fields));
    });
});

app.post("/api/kudos", (req, res) => {
  salesForce.createKudos(req.body).then(() => {
    // console.log(data.records.map(record => record._fields));
    res.json({ success: true });
  });
});

app.listen(PORT, function() {
  console.log(`We are connected 🌎 on PORT ${PORT}`);
});
