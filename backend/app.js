const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const jwt = require("jsonwebtoken");
const User = require("./model/user.model");
const cors = require("cors");
const bodyParser = require("body-parser");
const isLoggedIn = require("./middleware");
const Expert = require("./model/expert.model");
const Appointment = require("./model/appointments.model");
const JWTSECRECT = "mudasirpandith";
const nodemailer = require("nodemailer");

mongoose
  .connect("mongodb://localhost:27017/eGarden")
  .then(() => {
    console.log("Conneccted to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(bodyParser());
app.use(cors());
app.post("/signup", async (req, res) => {
  const body = req.body;
  console.log(body);
  const user = await new User(body).save();
  const token = await jwt.sign({ userId: user._id }, JWTSECRECT);
  res.status(202).json({ user, token });
});

app.post("/signin", async (req, res) => {
  const body = req.body;
  console.log(body);
  const user = await User.findOne({ email: body.email });
  if (user) {
    if (user.password === body.password) {
      const token = await jwt.sign({ userId: user._id }, JWTSECRECT);
      res.status(200).json({ user, token });
    } else res.status(404).json({ message: "Error" });
  } else return res.status(404).json({ message: "User not found" });
});
app.get("/getuser", isLoggedIn, async (req, res) => {
  console.log("trigger");
  const user = req.user;
  const apps = await Appointment.find({ clientId: user._id }).populate(
    "expertId"
  );
  return res.status(200).json({ user, apps });
});

app.post("/add-expert", async (req, res) => {
  const body = req.body;
  console.log(body);
  const user = await new Expert(body).save();
  const token = await jwt.sign({ userId: user._id }, JWTSECRECT);
  res.status(202).json({ user, token });
});

app.get("/expert-profile", async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const { userId } = jwt.verify(token, "mudasirpandith");
    const user = await Expert.findById(userId);
    const apps = await Appointment.find({ expertId: user._id })
      .populate("expertId")
      .populate("clientId");
    res.status(200).json({ user, apps });
  } catch (error) {
    return res.sendStatus(404);
  }
});
app.get("/get-expert/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const expert = await Expert.findById(id);
  return res.status(200).json({ expert });
});

app.post("/expert-login", async (req, res) => {
  const body = req.body;
  const user = await Expert.findOne({ email: body.email });
  if (user) {
    if (user.password === body.password) {
      const token = await jwt.sign({ userId: user._id }, JWTSECRECT);
      res.status(200).json({ user, token });
    } else res.status(404).json({ message: "Error" });
  } else return res.status(404).json({ message: "User not found" });
});

app.get("/getAllExperts", async (req, res) => {
  const experts = await Expert.find({});
  return res.status(200).json(experts);
});
app.post("/add-appointment", isLoggedIn, async (req, res) => {
  const body = req.body;
  console.log(body);
  await new Appointment({
    expertId: [body.expertId],
    clientId: [req.user._id],
    date: body.date,
    slot: body.slot,
    service: body.service,
    message: body.message,
  }).save();
  res.status(202).json({
    message:
      "You have booked/scheduled your slot. Please be patient while epxert confirms your booking",
  });
});

app.post("/confirm-app", async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    await Appointment.findOneAndUpdate(
      { _id: body.id },
      { $set: { status: body.status } }
    );
    const apps = await Appointment.findById(body.id)
      .populate("clientId")
      .populate("expertId");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mudasirpandith789@gmail.com",
        pass: "fwprqgigfegjoria",
      },
    });

    const mailOptions = {
      from: "mudasirpandith789@gmail.com",
      to: apps.clientId[0].email,
      subject: "eGardener : Appointment Status",
      text: `Your appointment status has been updated to ${body.status}.`,
      html: `<div>
       <p>Dear ${apps.clientId[0].name}</p>
       <h1 style="background-color: green;">Your appointment has been ${apps.status}.</h1>
      <p>Your appointment details: </p>
      <p>Service : ${apps.service} </p>
      <p>Date : ${apps.date} </p>
      <p>Slot : ${apps.slot} </p>
     <p>Message : ${apps.message} </p>
     <h1>Expert details</h1>
    <p>Name of expert: ${apps.expertId[0].name}</p>  
  </div>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({
      apps,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(4000, () => {
  console.log("Runing on http://localhost:4000");
});
