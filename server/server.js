require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnect");
const port = process.env.PORT || 3000;
mongoose.set("strictQuery", true);

/* 
  Connect to MongoDB 
*/
connectDB();

/* 
  Custom Middleware Logger 
*/
app.use(logger);

/* 
  Cross Origin Resource Sharing 
*/
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

/* 
  Built-in middleware to handle urlencoded form data
*/
app.use(express.urlencoded({ extended: false }));

/* 
  Built-in middleware to handle json
*/
app.use(express.json());

/* 
  Middleware for cookie
*/
app.use(cookieParser());

/* 
  Serve Static Files
*/
app.use(express.static(path.join(__dirname, "/public")));

/* 
  Route Handler 
*/
app.use("/", require("./routes/root"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/rooms", require("./routes/api/room"));
app.use("/api/booking", require("./routes/api/booking"));

/* epayment integration
 * */
app.use("/api/khalti-payment-initiate", require("./routes/api/epayment"));
app.use("/api/khalti-payment-lookup", require("./routes/api/epayment"));

app.all("*", (req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB...");

  app.listen(port, () =>
    console.log(`server running on http://localhost:${port}`)
  );
});
