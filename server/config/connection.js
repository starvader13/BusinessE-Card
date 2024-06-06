import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const databaseConnectionString = process.env.DATABASE_URL;
const databaseName = process.env.DATABASE_NAME;

const connectDatabase = async ()=>{
    try{
        await mongoose.connect(`${databaseConnectionString}/${databaseName}`);
        console.log("Database Connected Successfully");
        return {
            origin: "dbConnection",
            status: true,
            msg: "Database Connected Successfully",
            timestamp: Date()
        }
    }catch(error) {
        console.log("Database Connection Failed");
        return{
            origin: "dbConnection",
            status: false,
            msg: "Database Connection Failed",
            timestamp: Date(),
            error: error.message
        }
    }
}

export default connectDatabase;
