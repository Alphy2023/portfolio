import mongoose from "mongoose";
const dbConnect = () => {
  mongoose.set('strictQuery', false);

  // connect to mongodb database
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log(err.message);
    });

  // try{
  //     mongoose.connect(process.env.MONGO_URI)
  // console.log('Database connected successfully!')

  // }catch(err){
  //     throw new Error(err)
  //     // throw new Error('Could not Connect. Something went wrong!')
  //     console.log('Could not Connect. Something went wrong!')
  // }
};
export default dbConnect;
