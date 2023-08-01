// console.log('it\'s work')      
//const something = require ('somlibrary');

const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use((req,res,next)=>{

    //how we can check the request type
    //object.property
    console.log(req.method);

    //conditions
    /*
        if (condition) {
            //block of code to be executed if the condition is true
        }
    */
        console.log( typeof (req.method))
        if(req.method === 'GET'){
            console.log("Hi")
            res.status(400).json({
                'msg':'GET Request is not allowed !'
            })
        }else{
            next();
        }


    
});

app.get('/students',(req,res)=>{
    //pbject.method(actual arguments)
    res.json({ 
        "msg":"hey hey"
    });
});

app.listen(PORT,()=>{
    console.log(`This server is running on port ${PORT}`)
});



// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)