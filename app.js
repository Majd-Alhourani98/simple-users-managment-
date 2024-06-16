const express = require("express");
const app = express();

// getting the users data
const users = require("./users");

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users: "<list of users>",
    },
  });
};

const getSingleUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users: "<single user>",
    },
  });
};

const createUser = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      users: "<new user>",
    },
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users: "<updated user>",
    },
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users: "<deleted user>",
    },
  });
};

app.route("/api/users").get(getAllUsers).post(createUser);

app
  .route("/api/users/:id")
  .get(getSingleUser)
  .patch(updateUser)
  .delete(deleteUser);

app.listen(3000, () => {
  console.log("the server is listening on port 3000 ");
});
