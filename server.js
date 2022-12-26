const express = require('express')


const app = express()
//creating middle-ware

//it is a funtion which gets executed before exection of any other routes.

//we can create middleware into the two formate
//1.one is middleware which is applicable to the all the routes
//2.other one is middleware which is applicable to specific route only


//it is the function which takes in the three params, first is req ,secand is res and other one is next


//whenever you creating any middleware,make sure you are using next functionat at the end so that
//the execte can move either next middleware or next route
const middleWare1 = (req,res,next)=>{
    console.log("It is the first middleware");
    next()
}

const middleWare2 = (req,res,next)=>{
    console.log("It is the secand middleware");
    next()
}

//you are finally given the middleware to the app


//it will be accessible for every route
app.use(middleWare1);

//to specify a middleware for a specific   
app.get('/user',middleWare2,(req,res)=>{
    res.send({
        name:"Irfan",
        age:23,
        course:"MERN"
    })
})
app.get('/home',(req,res)=>{
    res.send({
        name:"Irfan",
    })
})


app.listen(4002, () => {
    console.log("Application Started.......")
})