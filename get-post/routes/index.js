var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*get method with params*/
router.get('/test/:id/:name', (req, res, next)=>{
  var id = req.params.id;
  var name = req.params.name;
  res.render('get-response', {outputId: id, outputName: name})
})

/*post methos  */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'This is a simple GET_POST form.' });
});

router.post('/test/submit', (req, res, next)=>{
  var id = req.body.id;
  var name = req.body.name;
  res.redirect('/test/'+id+'/'+name)
})


module.exports = router;
