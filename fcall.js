var Q = require('q')

Q.fcall(sum, 8, 1)
  .then(function (data) {
    console.log('data : ' + data)
  })
  .fail(function (err) {
    console.error('fail : ' + err)
  })
  .done()

function sum (a, b) {
  // return a + b
  throw new Error('Whoops!')
}
