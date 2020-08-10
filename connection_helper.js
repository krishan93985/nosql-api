const mongoose = require('mongoose');
//use ES6 promises
mongoose.Promise = global.Promise;

const connectToDb = () => {
//connecting to mongodb
mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
//checking connection
mongoose.connection
  .once("open", () => {
    console.log("Connected to db");
  })
  .on("error", (err) => console.log(err));

}

module.exports = {
    connectToDb
}