const router = require("express").Router();
const {
  createUser,
  getUserByUserId,
  getAllUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");
router.get("", getAllUsers);
router.post("/", createUser);
router.get("/id/:id", getUserByUserId);
router.patch("", updateUsers);
router.delete("/id/:id", deleteUser);

module.exports = router;
