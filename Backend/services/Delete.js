import { db } from "../models/user.model.js"

const Delete = async (req, res) => {
    const { _id } = req.body
    await db.deleteMany({ _id: _id })
    res.json({ message: "success" })
}
export {Delete }