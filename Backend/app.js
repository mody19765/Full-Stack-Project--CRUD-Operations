import Express from "express";
import {app1} from "./api/user.routes.js";
import { DBconnection } from "./config/dbConnection.js";
import cors from 'cors'
const app = Express()
app.use(Express.json())
app.use(cors())
app.use(app1)
DBconnection()
app.listen(3000, () => {
    console.log("server is runnnnning");
})