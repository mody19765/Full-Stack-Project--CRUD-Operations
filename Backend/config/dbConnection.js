import mongoose from "mongoose";



function DBconnection(){
     mongoose.connect('mongodb+srv://Mody:kXwUiRxSzXpQGD9o@cluster0.rboquiy.mongodb.net/test').then((reslt) => {
    console.log("Database connection");
})}

export{DBconnection}


