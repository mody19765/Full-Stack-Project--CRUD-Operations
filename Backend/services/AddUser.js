import { db } from "../models/user.model.js"

const Adduser = async (req, res) => {
    const { ProductName, ProductPrice, ProductDescription } = req.body
    await db.insertMany({ ProductName, ProductPrice, ProductDescription })
    res.json({ message: "success" })

}
export{Adduser}