const express = require("express");
 const amqplib = require("amqplib");
const bodyParser = require("body-parser");
const { PORT, FLIGHT_SERVICE_PATH } = require("./config/serverConfig");
const app = express();
const apiRoutes = require("./routes/index");
const db = require("./models/index");


const setupAndStartServer = () => {

  // async function connectQueue(){
  //   try {
  //     const connection= await amqplib.connect("amqps://qlaqfzlj:mmfXm2imASmnYaV3_PP94E9IelhOjyMZ@puffin.rmq2.cloudamqp.com/qlaqfzlj")
  //     const channel= await connection.createChannel();
  //     await channel.assertQueue("noti-queue");
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/bookingservice/api", apiRoutes);
  app.listen(PORT, () => {
    console.log("listening on port " + PORT);
      
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }
  });
};

setupAndStartServer();
