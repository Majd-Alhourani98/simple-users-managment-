const express = require("express");
const fs = require("fs");
const app = express();

// getting the users data
const users = require("./users");

//  Get All users  route
app.get("/api/users", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users: users,
    },
  });
});

app.listen(3000, () => {
  console.log("the server is listening on port 300 ");
});
