const Room = require("../model/Room");
const User = require("../model/User");

async function createRoom(req, res) {
  try {
    const result = await Room.create(req?.body);

    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
}

async function getAllRooms(req, res) {
  try {
    const result = await Room.find();

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

async function getRoomByName(req, res) {
  try {
    const result = await Room.findOne({ _id: req?.params?.id });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

async function getRoomByUserId(req, res) {
  try {
    const result = await Room.findOne({ userId: req?.params?.userId });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

async function editRoomById(req, res) {
  try {
    const result = await Room.findByIdAndUpdate(req?.params?.id, {
      $set: req.body,
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

async function deleteRoomById(req, res) {
  try {
    const result = await Room.findByIdAndDelete(req?.params?.id);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createRoom,
  getAllRooms,
  getRoomByName,
  getRoomByUserId,
  deleteRoomById,
  editRoomById,
};
