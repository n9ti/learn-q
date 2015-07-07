var Q = require('q')

Q.nfcall(sum, 1, 2)
  .then(function (data) {
    console.error('then : ' + data)
    return Q.nfcall(testError)
  })
  .fail(function (err) {
    console.error('fail : ' + err)
  })
  .done()

function sum (a, b, cb) {
  cb(null, a, b, a + b)
}

function testError (cb) {
  // cb(new Error('Test Error.'))
  // or
  throw new Error('Whoops!')
}
