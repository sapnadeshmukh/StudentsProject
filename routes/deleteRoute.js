const express=require("express")
const router=express.Router()
const deleteController=require('../controllers/delete_controller')

router.delete('/:id',deleteController.delete_data)
module.exports=router