var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  var jsforce = require('jsforce');
	var conn = new jsforce.Connection();
	conn.login('stephen.montana@dealertrack.com', 'Blowjob2014', function(err, res) {
	  if (err) { return console.error(err); }
	  conn.query('SELECT Id, Name FROM Account', function(err, res) {
	    if (err) { return console.error(err); }
	    console.log(res);
	  });
	});
});


module.exports = router;
