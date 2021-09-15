const express=require("express")
const router=express.Router()
const getController=require('../controllers/get_controller')

router.get('/',getController.get_data)
module.exports=router