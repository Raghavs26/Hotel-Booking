const express = require("express");
const cors = require("cors");
const path = require("path");

const roomsRoutes = require("./routes/roomsRoute");
const userRoute = require("./routes/userRoute");
const bookingsRoute = require("./routes/bookingsRoute");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/rooms", roomsRoutes);
app.use("/api/users", userRoute);
app.use("/api/bookings", bookingsRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node JS Server Started`));
