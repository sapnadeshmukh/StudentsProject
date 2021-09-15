const express=require("express")
const router=express.Router()

router.use('/createdata',require('./createRoute'))
router.use('/getdata',require('./getRoute'))
router.use('/updatedata',require('./updateRoute')) 
router.use('/deletedata',require('./deleteRoute'))





module.exports=router