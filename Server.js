const express = require("express")
const cors = require("cors")
const app = express()
const {json}=require("express")
const ProductModel = require("./Model/productModel")
const EmpModel=require("./Model/EmpModel")
const mongoose= require("mongoose")
app.use(cors());
app.use(json())

mongoose.connect("mongodb://127.0.0.1:27017/taskdata")
.then(()=>console.log("db is connectet succesfull"))
.catch((er)=>console.log(err))

app.get("/", (req, res) => {
    res.send("Good New Api")
})

app.get("/producshow", async (req, res) => {
 
    const result = await ProductModel.find(req.body);
    res.send(result)
});
app.post("/addproduct", (req, res) => {
   
    const newBenef = new ProductModel(req.body);
    newBenef.save();
    res.json(newBenef)
    res.send("New Beneficiary added sucessfully!");

})

app.post("/updateProduct",async (req,res)=>{
    const result= await ProductModel.updateOne({"productId": req.body.productId},{"name": req.body.name, "dec":req.body.dec,"price":req.body.price,"category":req.body.category,"img":req.body.img})
    res.json(result)
})

app.get("/empshow", async (req, res) => {
    // ConnectDB();
    const result = await EmpModel.find(req.body);
    res.send(result)
});
app.post("/addemp", (req, res) => {
    // ConnectDB();
    const newEmp = new EmpModel(req.body);
    newEmp.save();
    res.send("New Employee added sucessfully!");

})
app.post("/deleteprod", async (req, res) => {
    const result = await ProductModel.findOneAndDelete(req.body);
    res.send(`product delete sucessfull ${req.pdId}`);
  });
  
app.listen(4040, () => {
    console.log(`New Server On 4040`)
})