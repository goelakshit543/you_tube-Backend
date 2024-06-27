import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb=async()=>{
    try {
 const connectionInstance=await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`) 
 console.log(`Mongo DB Connected !! DB HOst: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongo Db Connection error",error);
        process.exit(1)
    }
}
export default connectDb