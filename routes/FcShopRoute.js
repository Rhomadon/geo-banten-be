const express = require("express");
const router = express();

const FcShopRouter = require("../controllers/FcShopController");

router.post("/api/fcshopisoline", FcShopRouter.getFcshopByIsoline);
router.post("/api/getfilepath", FcShopRouter.getFilePath);

module.exports = router;
