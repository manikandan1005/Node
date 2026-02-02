import express from 'express'

const app=express();
// Middleware for the change the json to data
app.use(express.json())
const port=3000;
const user=[
    {id:1, name: "Mani", age: 22, city: "Chennai" },
    {id:2, name: "Arun", age: 24, city: "Coimbatore" },
    {id:3, name: "Karthik", age: 23, city: "Madurai" },
    {id:4, name: "Priya", age: 21, city: "Trichy" },
    {id:5, name: "Divya", age: 25, city: "Salem" },
    {id:6, name: "Vijay", age: 26, city: "Erode" }
]
const dummyUser=[
    {id:1, name: "Mani", age: 22, city: "Chennai" },
    {id:2, name: "Arun", age: 24, city: "Coimbatore" },
    {id:3, name: "Karthik", age: 23, city: "Madurai" },
    {id:4, name: "Priya", age: 21, city: "Trichy" },
    {id:5, name: "Divya", age: 25, city: "Salem" },
    {id:6, name: "Vijay", age: 26, city: "Erode" }
];
app.listen(port,(req,res)=>{
    console.log(`server start running at port ${port}`)
})
app.get('/',(req,res)=>{
    res.send({message:'root'})
})

app.get('/api/user',(req,res)=>{
    res.send(user);
})

app.get('/api/user/:id',(req,res)=>{
    console.log(req.params);
    const id=parseInt(req.params.id)
    console.log(id)
    // check the id id number or not
    if (isNaN(id)){
       return res.status(400).send({message:'bad request invalide id'})
    }
    const dt=dummyUser.find((i)=>i.id===id)
    console.log(dt);

    // check the id is have in list or not
    if (dt){
        return res.send(dt)
    }
    
    return res.send({message:'user not found'})
})
// Middleware for the change the json to data 

app.post('/api/user',(req,res)=>{
    let newUser=req.body;
    newUser.id=user.length+1;
    // console.log(req);
    console.log(newUser)
    res.status(201).send({message:'new user data get '})
    
    user.push(newUser);
    dummyUser.push({...newUser})
})