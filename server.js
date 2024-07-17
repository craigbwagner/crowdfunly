const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const usersRouter = require("./routes/users");
const profilesRouter = require("./routes/profiles");
const campaignsRouter = require("./routes/campaigns.js");
const stripeRouter = require("./routes/stripe.js");
const contributionsRouter = require("./routes/contributions.js");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(cors({ origin: "https://crowdfunly.netlify.app/"}));

app.use("/users", usersRouter);
app.use("/profiles", profilesRouter);
app.use("/campaigns", campaignsRouter);
app.use("/stripe", stripeRouter);
app.use("/contributions", contributionsRouter);

app.listen(process.env.PORT, () => {
  console.log("The express app is ready!");
});
