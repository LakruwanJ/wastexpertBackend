var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://wastExpert:Project2@wastexpert.e4ofa4l.mongodb.net/?retryWrites=true&w=majority&appName=wastExpert"

var DATABASENAME = "wastexpertdb";
var database;

app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING),(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo db Connection Sucessful");
    }
})
