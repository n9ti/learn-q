var Q = require('q')
var request = require('request')

Q.nfcall(request, 'https://api.myjson.com/bins/n01a')
  .then(function (data) {
    var json = JSON.parse(data[1])
    return Q.nfcall(request, json.url)
  })
  .then(function (data) {
    var json = JSON.parse(data[1])
    console.log(json.name)
  })
  .fail(function (err) {
    console.error('fail : ' + err)
  })
  .done()
