const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const app = require("./app");

// Connecting to DB
mongoose
  .connect(process.env.DD_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port} ...`);
});
