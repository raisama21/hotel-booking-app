const express = require("express");
const router = express.Router();
const roomController = require("../../controllers/roomController");

router
  .route("/")
  .get(roomController.getAllRooms)
  .post(roomController.createRoom);

router.get("/details/:id", roomController.getRoomByName);

router.get("/user_room/:userId", roomController.getRoomByUserId);

router.put("/:id", roomController.editRoomById);

router.delete("/:id", roomController.deleteRoomById);

module.exports = router;
