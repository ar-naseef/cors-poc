var express = require("express");
var bunyan = require("bunyan");
var app = express();
var log = bunyan.createLogger({name: 'myapp'});

app.all("/*", (req, res, next) => {
	console.log(req.headers.origin);
	console.log("a req came..!, allowing cors..");
	res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	console.log(req.method);
	//console.log(req.headers.origin);
	
	if(req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.put('/name', (req, res) => {
	res.send("name3");
});

app.listen(4200, () => {
	console.log("server is running at port 4200");	
})
