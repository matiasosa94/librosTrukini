const controllerIndex=require("../controllers/controllerIndex");

const express=require("express");
const router = express.Router();

router.get("/", controllerIndex.home);

module.exports=router;
