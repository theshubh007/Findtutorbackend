const mongoose = require("mongoose")
const mongoURI =
  "mongodb+srv://20se02ce028:UlR5Q0X4zcP5gQrq@cluster1.hgkllla.mongodb.net/?retryWrites=true&w=majority"

mongoose.set("strictQuery", false)

const connectTomongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
    })
    .then(console.log("connected to mongo sucessfully"))
    .catch((err) => {
      console.log("no connection", err)
    })
}
//

module.exports = connectTomongo
