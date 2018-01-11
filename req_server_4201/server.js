var express = require("express");
var app = express();

// app.all("/*", (req, res, next) => {
// 	console.log("a req came...!");
// 	res.header('Access-Control-Allow-Origin', req.headers.origin);
// 	next();
// });

app.get('/ajax', (req, res) => {
	res.sendFile( __dirname+'/view/index.html');
});

// app.get('/name', (req, res) => {
// 	res.send("name2");
// });

app.listen(4201, () => {
	console.log("server is running at port 4201");	
})