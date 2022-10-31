const routerIndex = require("./src/routes/routerIndex");

const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require('cookie-parser')
const app = express();

app.set("view engine", "ejs");

const publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookies());
app.use(session({
    secret:"Esto es un secreto",
    resave:false,
    saveUninitialized:false,
}));



app.use("/", routerIndex);



app.listen(process.env.PORT || 3015, ()=>{
    console.log("Servidor corriendo");
});

