const express = require("express");
const router = express();

const UserRouter = require("../controllers/UserController");

router.get("/api/user", UserRouter.getAllUser);
router.get("/api/user/:id", UserRouter.getUserById);
router.post("/api/user", UserRouter.createUser);
router.delete("/api/user/:id", UserRouter.deleteUser);
router.patch("/api/user/:id", UserRouter.editUser);
router.post("/api/login", UserRouter.login);
router.post("/api/user/manhourinput", UserRouter.getUserManhourInput);
router.post("/api/changepassword", UserRouter.changePassword);
router.post("/api/resetpassword", UserRouter.resetPassword);

router.get("/api/machine", UserRouter.getMachine);

module.exports = router;
