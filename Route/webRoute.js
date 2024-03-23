const express = require("express");
const {UserView,CreateUser,GetUser,EditUser, UpdateUser, DeleteUser,} = require("../Controller/webController");
const upload = require("../Utiliti/userImage");
const Router = express.Router();

Router.get("/", UserView);
// Router.post("/user/createuser", upload.single("images"), CreateUser);
Router.post("/user/createuser", upload.array('images',4), CreateUser);
Router.get("/getuser", GetUser);
Router.get("/edituser/:id", EditUser);
Router.post("/updateuser/:id",upload.array('images',4),UpdateUser);
Router.get('/deleteuser/:id',DeleteUser)

module.exports = Router;
