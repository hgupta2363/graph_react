const express=require("express")
const http=require("http")
const cors = require("cors");
const app=express()
http.createServer(app).listen("8080")
app.use(cors());
app.get("/graphdata/:id",(req,res,next)=>{
    const data={}
   console.log(req.params.id)
    var e=Number(req.params.id)/100;
    console.log(e)
    var n = 0;
    var h = [];
    var t = [];
    var i = 0;
    var g = 10;
    h[0] =1000;
    h[1] = 0;
    t[0] = 0;
    t[1] = Math.sqrt((2 * h[0]) / g);
    var x = Math.sqrt(2 * g * h[0]);
    while (x >10) {
      x = x * e;
      n++;
    }
    for (i = 2; i < n; i++) {
      h[i] = h[i - 2] * e * e;
    }
    for (i = 2; i < n; i++) {
        if (i % 2 == 0) {
          t[i] = t[i - 1] + e * t[i - 1];
        } else {
          t[i] = t[i - 1] + e * t[i - 2];
        }
      }
data.height=h;
data.time=t

res.json(data)
})