const express = require("express");
const router = express();

const AdministrasiDesaRouter = require("../controllers/AdministrasiDesaController");

router.get("/api/administrasi_desa", AdministrasiDesaRouter.getAllAdministrasiDesa)

module.exports = router;
