var markers = require('../data/locations.js');
var jobs = require("../data/jobs.js")

module.exports = function(app){

	app.get('/api/locations', function(req, res){
		res.json(markers)
		//Try pluggin in the algortim here, get rid of app on the html and just post the user who is matched with

	})

	app.get('/api/jobs', function(req, res){
		res.json(jobs)
	})

	app.post('/api/jobs', function(req, res){
		jobs.push(req.body);
		console.log(res.body);
		console.log(res)
		console.log(req.body)
	})
}