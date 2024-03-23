const express=require('express')
const { createUser, getUser, editUser, updateUser, deleteUser } = require('../Controller/apiController')
const Router=express.Router()
const upload=require('../Utiliti/userImage')

// Router.post('/user/create',upload.single('image'),createUser)
Router.post('/user/create',upload.array('images',5),createUser)
Router.get('/user/getuser',getUser)
Router.get('/user/edit/:id',editUser)
Router.put('/user/update/:id',upload.array('images',5),updateUser)
Router.delete('/user/delete/:id',deleteUser)

module.exports=Router