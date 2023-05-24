const { Schema, default: mongoose } = require("mongoose");
const User = require("./User");

const RoomSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      requred: true,
    },
    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    rentperday: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      requred: true,
    },
    imageurls: [String],
    currentbookings: [],
  },
  { timestamp: true }
);

module.exports = mongoose.model("Rooms", RoomSchema);
