var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var csv = require('csv');
	var fs = require('fs');
	csv_path = './lib/tester.csv'
	fs.readFile(csv_path, function(error, data){
		process.stdout.write(data);
	});
  res.render('index', { title: 'Express' });
});

/* POST csv to backend. */
router.post('/views/lead_analyze', function() {
		var csv = require('csv');
		var fs = require('fs');
		csv_path = '/views/lead_analyze'
		fs.readFile(csv_path, function(error, data){
			process.stdout.write(data);
		});
	  
	});


module.exports = router;
