var express = require ("express");
var path = require ("path");
var open = require ("open");
var webpack = require ("webpack");
var config = require ("../webpack.config.dev.js");

const port = 3000;
const app = express();
const compiler = webpack(config);


//handle this way
app.get("/", function(rep, res){
    res.sendFile(path.join(__dirname, "../src/index.html"));
})



//go listen the port
app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open("http://localhost:" + port);
    }
})