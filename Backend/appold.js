const express=require("express")
const sql=require("mysql2")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

const q=sql.createConnection({
    host:"localhost",
    database:"CRUD",
    user:"root",
    password:""
}
)




/* Add Product  */
app.post("/AddProduct",(req,res)=>{
    const{ProductName,ProductPrice,ProductDescription}=req.body

    q.execute(`insert into products(ProductName,ProductPrice,ProductDescription) 
    value("${ProductName}","${ProductPrice}","${ProductDescription}")
    `,)
        res.json({message:"success"})
})

/* Display Products */
app.get("/display",(req,res)=>{
    q.execute(`select * from products` ,(err,reslut)=>{
        res.json({Products: reslut})
    })
})


/* Update Products*/
app.put("/update",(req,res)=>{
    const{id,ProductName,ProductPrice,ProductDescription}=req.body
   
        q.execute(`Update products set 
        ProductName='${ProductName}',
        ProductPrice='${ProductPrice}' ,
        ProductDescription='${ProductDescription}' 
        where id=${id}`,(err,result)=>{
         res.json({message : "success"})})
})

/*Delete Product*/

app.delete("/delete",(req,res)=>{
    const{id}=req.body

    q.execute(`delete from products where id=${id}`)
    res.json({message:"success"})
})








app.listen(3000,()=>{

console.log("server is runnning ......");
})
