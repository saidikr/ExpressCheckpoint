const express = require('express');
const app = express();
const port = 4000;
const cors = require("cors");

const posts = [
  {
    id: 1,
    title: "Enim sunt tempor Lorem reprehenderit duis est.",
    body: "Non tempor minim aliqua minim incididunt mollit nulla nisi id irure enim veniam. Sint tempor proident Lorem laboris cillum exercitation quis non. Veniam enim et nostrud occaecat ea veniam eiusmod enim ad incididunt. Ad officia occaecat dolore fugiat excepteur duis ea reprehenderit dolor nulla fugiat fugiat cillum culpa. Consequat duis aute ipsum officia fugiat deserunt qui magna ex labore magna irure proident voluptate. Occaecat dolore quis nisi eiusmod do elit cillum exercitation dolore in.",
  },
  {
    id: 2,
    title:
      "Ea anim voluptate fugiat ipsum proident do aute fugiat irure et nisi proident ipsum.",
    body: "Incididunt labore ad eu aliqua ea ipsum culpa nulla magna Lorem tempor voluptate laboris. Qui nisi excepteur sunt occaecat duis excepteur ea in cupidatat id ea sint. Enim tempor anim eu nulla est velit consequat. Pariatur labore duis nostrud voluptate ullamco. Ad deserunt eiusmod sunt exercitation ullamco.",
  },
];


app.use(cors());
var today = new Date();

const checkDate = function (req, res, next) {
    var day =today.getDay();
    var heure =today.getHours();
    if(day==0 || day==6 || heure>18 || heure <9){
        res.send("no")
    }
  next();
}

app.use("/api",checkDate);


app.get('/api',function(req, res){  res.send(posts);  });

app.listen(port, function() {
  console.log(`The server is running at http://localhost:${port}`);
});
