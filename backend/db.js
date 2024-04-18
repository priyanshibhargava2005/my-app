const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://FoodApp:mern123@cluster0.anqa2yg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected");
  } catch (err) {
    console.error("---", err);
  }
};

module.exports = mongoDB;
