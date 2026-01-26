const http =require('http');

const PORT=2020;


const app= http.createServer((req,res)=>{
    console.log(req.method)
    let url = req.url;
    console.log(url)
    // send simple json dt as res
    res.setHeader('Content-Type', 'text/html')
    // res.write('hiii');
    if(url==='/home'){
        res.write("<h1>Hii i am mani</h1>")
    res.end()
    }
    else if(url==='/about'){
        res.write("<h1>this is about</h1>")
        res.end();
    }
})
app.listen(PORT,"localhost",()=>{
    console.log(`server was created , start run in port ${PORT}`)
})


