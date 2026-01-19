console.log("hello");
console.log("simple test code for node");

// Global objects 
console.log(global);
setTimeout(()=>
    {
        console.log("time-out function in node fron Global object");
    },2000);

    // used to get the current directory name
    console.log(__dirname);
    // use to see the fail name 
    console.log(__filename)