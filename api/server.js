import express from "express";
import dbConnect from "./configs/dbCon.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/userRoute.js";

const app = express();
dotenv.config();
// converting form data in post request to json object
const PORT = process.env.PORT || 4000;

dbConnect();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
// USERS
app.use('/api/user',userRouter)


app.listen(PORT, () => {
  console.log(`server is running at PORT:${PORT}`);
});
