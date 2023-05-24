const express = require("express");
const router = express.Router();
const epaymentController = require("../../controllers/epaymentController");

router
  .route("/")
  .post(epaymentController.khaltiPaymentInitiate)
  .post(epaymentController.khaltiPaymentLookup);

module.exports = router;
