const fs =require ('fs')

fs.mkdir('./docs',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})