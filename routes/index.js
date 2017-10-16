
/*
 * GET home page.
 */


// we need the access to the data folder
// Flights is a small db 

var flights = require('../data/index');

// flight is an object blue print
var flight  = require('../Flight/index');


for (var p in flights){
	flights[p] = flight(flights[p]);
}


// console.log(flights);



exports.flight = function (req,res){
	var num = req.param("number");
	if (typeof flights[num] === "undefined"){
		res.status(404).json({status:'Not found'});
	}
	else{
		res.json(200,flights[num].getinfo());
	}
};


// PUT functionality 
exports.arrive = function(req,res){
	var num = req.param('number');
	if (typeof flights[num] === "undefined"){
		res.status(404).json({status:'Not found'});
	}
	else{
		flights[num].triggerArrival();
		res.status(200).json({status:'Success'});
	}
};

/*
// Call Back function. 
exports.flight1  = function(req,res){
	res.json(200, flights[18].getinfo());fligh  s 
};
exports.flight2  = function(req,res){
	res.json(200, flights[33].getinfo());
};
*/