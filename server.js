const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

const PI_API_KEY = process.env.PI_API_KEY;

app.get('/', function(req, res) {
  res.json({ status: 'PiArena Backend OK' });
});

app.post('/approve', function(req, res) {
  var paymentId = req.body.paymentId;
  var url = 'https://api.minepi.com/v2/payments/' + paymentId + '/approve';
  axios.post(url, {}, {
    headers: { Authorization: 'Key ' + PI_API_KEY }
  }).then(function() {
    res.json({ approved: true });
  }).catch(function(e) {
    res.status(500).json({ error: e.message });
  });
});

app.post('/complete', function(req, res) {
  var paymentId = req.body.paymentId;
  var txid = req.body.txid;
  var url = 'https://api.minepi.com/v2/payments/' + paymentId + '/complete';
  axios.post(url, { txid: txid }, {
    headers: { Authorization: 'Key ' + PI_API_KEY }
  }).then(function() {
    res.json({ completed: true });
  }).catch(function(e) {
    res.status(500).json({ error: e.message });
  });
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('PiArena Backend running on port ' + PORT);
});
