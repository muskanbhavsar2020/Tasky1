// PORT
// port is entry point for our server
// it is basically a gateway through which external services can enter your server.
// Database Connection
// Authentication
// Security Services,web services


// Headers
// additional coded information
// when server interact so we don't understand and they share information A -------> B


// HTTPS
// Https status code is numeric code to define situation like server is facing port is facing.
// Success-200
// Access-404(Not available) 401(not authorized) 403(authorized but forbidden to access)
// Server error-500


// JSON(Javascript object notation)
// shortend format to exchange information or data between servers
// key value format


// *************************************Code*******************************************************************

// filesystem is internal package requires is used to import our entire module and fs is offical name internal module
// const fileSystem=require("fs")
// // writefile is method and has 3 parameter and used to write or create a file
// fileSystem.writeFile("noddy.txt","Hello Noddy!!!",function(err,result) {
//   if (err){
//     console.log(err);
//   }
// });


// const fileSystem=require("fs")
// // unlink is method to remove file
// fileSystem.unlink("noddy.txt",function(err,result) {
//   if (err){
//     console.log(err);
//   }
// });



// const fileSystem=require("fs")
// // mkdir is method to make directory
// fileSystem.mkdir("noddy",function(err,result) {
//   if (err){
//     console.log(err);
//   }
// });



// const fileSystem=require("fs")
// // rmdir is method to remove directory
// fileSystem.rmdir("noddy",function(err,result) {
//   if (err){
//     console.log(err);
//   }
// });




// const operatingSystem=require("os")
// console.log(operatingSystem.platform());


// const operatingSystem=require("os")
// console.log(operatingSystem.arch());



// http module and createServer is the method of http module
// const http=require("http");
// http.createServer((request,response) => {
//   console.log(request.headers);
//   response.end("Hello Noddy!!")
// }).listen(3000);



// const http=require("http");
// http.createServer((request,response) => {
//   if (request.url==='/'){
//     response.end("Hello Noddy!!");
//   }
//   else {
//     response.end("Hello all!!! this is not root route");
//   }
//
// }).listen(3000);

// EXPRESSSSS>...............................................................................................................
//REST API

//RE -> REpresentational
//S -> State
//T -> Transfer

//Representing data by sharing after processing

const express=require("express");
// INITIALIZE
const noddy=express();
noddy.use(express.json());


// HTTPS method->>GET,POST,PUT,DELETE
// GET -->means to retrieve any Data
// POST -->means to send data to a server
// PUT -->means to update some data
// DELETE -->means to delete an existing data


noddy.get("/",(request,response) =>{
  return response.json({data:"Hello Guys"});
});

// noddy.get("/b",(request,response) =>{
//   return response.json({data:"Hello route b people"});
// });

noddy.get("/b/:id",(req,res) => {
  const students = [
    {
      id: 1,
      name: "Student1"
    },
    {
      id: 2,
      name: "Student2"
    },
    {
      id: 3,
      name: "Student3"
    },
    {
      id: 4,
      name: "Student4"
    },
    {
      id: 5,
      name: "Student5"
    }
  ]

  const studentID = req.params.id;
  console.log(studentID);
  const getStudent = students.filter((student) => student.id === parseInt(studentID));
  return res.json({data: getStudent});
});

noddy.listen(3000,()=>{
  console.log("Server on port is 3000 is up and running");
});
