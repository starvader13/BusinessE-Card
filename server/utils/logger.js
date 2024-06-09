import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = async (jsonData={})=>{
    let filename = undefined;

    if(jsonData.origin==="dbConnection" && !jsonData.status){
         filename = path.join(__dirname, "../logs/databaseFailedLog.txt");
    }
    else if(jsonData.origin==="sign"){
        filename = path.join(__dirname, "../logs/signFailed.txt");
    }
    else if(jsonData.origin==="card"){
        filename = path.join(__dirname, "../logs/cardAuthorizationFailed.txt")
    }
    else{
        return null;
    }

    fs.appendFile(filename, "\n" + JSON.stringify(jsonData), (err, data)=>{
        if(err) throw err;
        console.log("The data was appended to file!")
    });
}

export default logger;
