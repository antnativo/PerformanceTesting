var restify = require("restify");


//setup cors
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse());
server.opts(/.*/, function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
    res.send(200);
    return next();
});
server.get(/(.*)/,restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));

var port = process.env.PORT || 8082;
server.listen(port,function(){
	console.log("Server Started.\n\nPress Ctrl+c to quit server: 8081\n\nTesting API http://www.broofa.com/Tools/JSLitmus/")
})
