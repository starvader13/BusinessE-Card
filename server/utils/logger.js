import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = async (jsonData={})=>{
    if(!jsonData.status){
        const filename = path.join(__dirname, "../logs/databaseFailedLog.txt");
        fs.appendFile(filename, "\n" + JSON.stringify(jsonData), (err, data)=>{
            if(err) throw err;
            console.log("The data was appended to file!")
        });
    }
}

export default logger;
