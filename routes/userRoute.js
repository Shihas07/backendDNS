
const express=require("express")
const router=express.Router()
const userController=require("../controller/userController")


router.post("/addData",userController.addDatas)
router.get("/getData",userController.getDatas)



module.exports=router;