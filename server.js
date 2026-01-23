const http =require('http');

const PORT=2020
const app= http.createServer((req,res)=>{
    
    let url = req.url;
    console.log(url)
    // send simple json dt as res
    res.Headers('Content-Type')
    res.write({message:'welcome'});
    res.end()
})
app.listen(PORT,"localhost",()=>{
    console.log(`server was created , start run in port ${PORT}`)
})