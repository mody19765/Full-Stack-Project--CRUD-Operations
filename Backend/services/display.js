import { db } from "../models/user.model.js"


const display=async (req, res) => {
    const data = await db.find({})
    res.json({ "Products": data })
}
export{display}