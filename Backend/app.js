import Express from "express";
import {app1} from "./api/user.routes.js";
import { DBconnection } from "./config/dbConnection.js";
import cors from 'cors'
import  dotenv  from 'dotenv'
dotenv.config()
const app = Express()
const port = process.env.PORT||3000

app.use(Express.json())
app.use(cors())
app.use(app1)
DBconnection()
app.listen(port, () => {
    console.log("server is runnnnning");
})
