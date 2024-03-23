const User = require("../Model/userModel");
// const flash = require('connect-flash');
const path = require("path");

//user view
const UserView = (req, res) => {
  res.render("addUser", {
    title: "add user",
  });
};
//create user
// const CreateUser = async (req, res) => {
//   try {
//     console.log(req.files)

//     // const { product_name, product_des, product_size, product_color, image } = req.body;
//     const { product_name, product_des, product_size, product_color } = req.body;
//     const image = req.files.map(file => file.path)
//     // if (!product_name && !product_des && !product_size && !product_color && !image  ) {
//     //   console.log('all filed is required');
//     // }
//     const userdata = new User({
//       product_name,
//       product_des,
//       product_size,
//       product_color,
//       image,
//     });
//     if (req.file) {
//       userdata.image = req.file.path;
//     }
//     const result = await userdata.save();
//     console.log("result", result);
//     if (result) {
//       return res.redirect("/getuser");
//     } else {
//       return res.redirect("/user");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const CreateUser = async (req, res) => {
  try {
    console.log(req.files);
    const { product_name, product_des, product_size, product_color } = req.body;
    const images = req.files.map((file) => file.path);

    if (!product_name || !product_des || !product_size || !product_color || !images) {
      console.log('All fields are required');
      return res.redirect("/user");
    }
    const userdata = new User({
      product_name,
      product_des,
      product_size,
      product_color,
      images,
    }); 
//****** only send single image ******//
    // if (req.file) {
    //   userdata.images = req.file.path;
    // }
    const result = await userdata.save();
    console.log("result", result);

    if (result) {
      return res.redirect("/getuser");
    } else {
      return res.redirect("/user");
    }
  } catch (error) {
    console.log(error);
  }
};
// get all
const GetUser = async (req, res) => {
  try {
    const result = await User.find();
    res.render("getUser", {
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
//edit user
const EditUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findById(id);
    res.render("editUser", {
      title: "Edit user",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
//update data
const UpdateUser=async(req,res)=>{
  try{
    console.log(req.files);
    const id=req.params.id;
    const { product_name, product_des, product_size, product_color } = req.body;
    const images = req.files.map((file) => file.path);
    const UpdateData={
      product_name,
      product_des,
      product_size,
      product_color,
      images,
    };
    const result=await User.findByIdAndUpdate(id,UpdateData,{
      new:true
    })
    if(result){
      res.redirect('/getuser')
    }else{
      res.redirect('/user')
    }
  }
  catch(error){
    console.log(error)
  }
}
//delete user
const DeleteUser=async(req,res)=>{
  try{
    
    const id=req.params.id;
    const result=await User.findByIdAndDelete(id);
    res.redirect('/getuser')
  }
  catch(error){
    console.log(error)
  }
}

module.exports = {
  UserView,
  CreateUser,
  GetUser,
  EditUser,
  UpdateUser,
  DeleteUser
};
