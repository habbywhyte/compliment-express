var express = require("express");
var hbs = require("express-handlebars");
var db  = require("./db/connection");

var app = express();

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));



app.get("/", function(req, res){
  var compliment = db.compliments
  // res.json(compliment);
  var randomCompliment = compliment[Math.floor(Math.random() * compliment.length)];

  var color = ["#FFBF00", "#0080FF","#01DF3A","#FF0080", "#9966ff", "#FFD635"];
  var randomColor = color[Math.floor(Math.random() * color.length)];

  var font = ["'Oswald', sans-serif","'Shadows Into Light', cursive"];
  var randomFont = font[Math.floor(Math.random() * font.length)];


    res.render("compliments-index", {compliment: randomCompliment, color: randomColor, font: randomFont})
});

app.get("/:name", function(req, res){

});

app.listen(3001, function(){
  console.log("It's aliiive!");
});

// function sample(compliments){
//   var randomCompliment = Math.floor(Math.random() * compliments.length);
//   return compliments[randomCompliment];
// }
