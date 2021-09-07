const  express =require("express");

const bodyParser = require("body-parser");

const  app = express();
 app.use (bodyParser.urlencoded({extended :true}))


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.js");


});

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
 
    var result = num1 + num2;
    res.send("The result of the calculation " + result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator.html",function(req,res){
     var  num1=parseFloat(req.body.num1);
     var num2=parseFloat(req.body.num2)

     var result= num1 /(num2*num2);
     res.send ("The Bmi weight for given data is :" + result+100);
});
app.listen(3000,function(){
    console.log("Something is cooking at your home");
});

