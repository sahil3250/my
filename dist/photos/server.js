var express = require("express");
var app = express();
const HTTP_PORT = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});


app.use((req, res, next) => {
    res.status(404).send({
    status: 404,
    error:'Not found'
    })
})

app.listen(HTTP_PORT,() =>
{
    console.log("Express http server listening on port " + HTTP_PORT);
});
