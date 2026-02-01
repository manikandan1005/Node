import express from 'express'

const app=express();
const port=3000;
const user=[
    { name: "Mani", age: 22, city: "Chennai" },
  { name: "Arun", age: 24, city: "Coimbatore" },
  { name: "Karthik", age: 23, city: "Madurai" },
  { name: "Priya", age: 21, city: "Trichy" },
  { name: "Divya", age: 25, city: "Salem" },
  { name: "Vijay", age: 26, city: "Erode" }
]
app.listen(port,(req,res)=>{
    console.log(`server start running at port ${port}`)
})

app.get('/api/user',(req,res)=>{
    res.send(user);
})
// madial ware for the change the json to data for post request
app.use(express.json())
app.post('/api/user',(req,res)=>{
    let newUser=req.body;
    console.log(newUser);
    res.send({message:'new user data get '})
    user.push(newUser)
})