//import json server library in index.js
//useing import keyword is :"require"
const jsonServer = require('json-server')

//create server useing json-server library

const meidaPlayerServer = jsonServer.create()

//create a path to ab.json
const router = jsonServer.router('ab.json')


//middleware to convert 
const middleware = jsonServer.defaults()


//connect connecting keyword is "use"

meidaPlayerServer.use(middleware)

meidaPlayerServer.use(router)

//setup port for server

const port = 5000 || process.env.PORT


//moniter 5000
meidaPlayerServer.listen(port,()=>{
    console.log(`meidaPlayerServer is lisitening to ${port} and waiting for the request`)
})