const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");


app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));


const sessionOptions={
    secret :"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
};

app.use(session(sessionOptions));
app.use(flash());


app.use((req, res, next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register",(req, res)=>{
    let {name="anonymouse"} = req.query;
    req.session.name = name;

    if(name == "anonymouse"){
        req.flash("error", "user not registred !!");

    }else{
        req.flash("success", "user registred successfully!!");
    }
    res.redirect("/hello");
});

app.get("/hello",(req, res)=>{
    res.render("page.ejs", {name: req.session.name});
});


app.get("/test",(req, res)=>{
    res.send("test sussessfull!!!");
})

app.listen(3000, () => {
    console.log("Server is listing to 3000");
});