const express = require("express");

const app = express();
const port =process.env.PORT || 8000;
const path = require("path");
const partials = require("partials");
const hbs = require("hbs")

// public sttaic path
// console.log(path.join(__dirname,"../public"));

// const staticPath = path.join(__dirname,"../public")
// app.use(express.static(staticPath));


const templateName = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs");
app.set("views",templateName);
 
hbs.registerPartials(partialPath);


app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/*",(req,res)=>{
    res.render("404error");
});




app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})