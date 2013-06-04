/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Red Social UNS 2013' });
};
