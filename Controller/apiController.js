const example = require("../Model/userModel");

//create user
const createUser = async (req, res) => {
  try {
    console.log(req.files);
    const { product_name, product_des, product_size, product_color } = req.body;
    const images = req.files.map((file) => file.path);

    const userdata = new example({
      product_name,
      product_des,
      product_size,
      product_color,
      images,
    });
    // if (req.file) {
    //   userdata.image = req.file.path;
    // }
    const result = await userdata.save();
    return res.status(201).json({
      status: true,
      messgae: "Data create successfully",
      newdata: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
//get user
const getUser = async (req, res) => {
  try {
    const result = await example.find();
    return res.status(201).json({
      status: true,
      message: "data fatch sucessfully",
      newdata: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
//edit user
const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result1 = await example.findById(id);
    return res.status(201).json({
      status: true,
      message: "data get sucessfully",
      newdata: result1,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
//update user
const updateUser = async (req, res) => {
  // console.log(req.body);
  try {
    const id = req.params.id;
    const { product_name, product_des, product_size, product_color } = req.body;
    const images = req.files.map((file) => file.path);
    const updatedData={
      product_name,
      product_des,
      product_size,
      product_color,
      images
    };
    const result = await example.findByIdAndUpdate(id,updatedData,{ new: true });
    return res.status(201).json({
      status: true,
      message: "update data successfully",
      updatedata: result,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
//delete user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await example.findByIdAndDelete(id);
    return res.status(500).json({
      status: true,
      message: "Data delete successfully",
      newdata: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUser,
  editUser,
  updateUser,
  deleteUser,
};
