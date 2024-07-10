const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://FoodApp:mern123@cluster0.anqa2yg.mongodb.net/FoodApp?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.error("---", err);
      else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection(
          "fooditems"
        );
        fetched_data.find({}).toArray(function (err, data) {
          if (err) console.error(err);
          else console.log();
        });
      }
    }
  );
};

module.exports = mongoDB;
