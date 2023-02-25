const express = require('express');
const app = express();
const connectTomongo = require('./dbconnection');
connectTomongo();
var cors = require("cors");
app.use(cors());


app.use(express.json());
const port = process.env.PORT || 5000;


app.use('/api/auth', require('./Routes/auth'));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
}
);