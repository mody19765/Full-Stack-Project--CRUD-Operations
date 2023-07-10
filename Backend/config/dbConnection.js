import mongoose from "mongoose";

import  dotenv  from 'dotenv'
dotenv.config()
const db=process.env.CONNECTION_STRING

function DBconnection(){
     mongoose.connect(`${db}`).then((reslt) => {
    console.log("Database connection");
})}

export{DBconnection}


