import { db } from "../models/user.model.js"




const Update = async (req, res) => {
    const { _id, ProductName, ProductPrice, ProductDescription } = req.body
    const data = await db.updateMany({ _id: _id }, { ProductName: ProductName, ProductPrice: ProductPrice, ProductDescription: ProductDescription })
    res.json({ message: "success" })
}
export{Update}