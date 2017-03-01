var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach((item) => {
    pagePhotos = pagePhotos.concat(item.artwork); 
  });

  res.render('speakers', {
    pageTitle: 'Speakers',
    pageID: 'speakerList',
    speakers: pageSpeakers,
    artwork: pagePhotos
  })
});

router.get('/speakers/:speakerid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = [];

  data.speakers.forEach((item) => {
    if (item.shortname == req.params.speakerid) {
      pageSpeakers.push(item);
      pagePhotos = pagePhotos.concat(item.artwork); 
    }
  });

  res.render('speakers', {
    pageTitle: 'Speakers',
    pageID: 'speakerDetail',
    speakers: pageSpeakers,
    artwork: pagePhotos
  })
});

module.exports = router;
