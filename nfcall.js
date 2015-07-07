var Q = require('q')

Q.nfcall(sum, 3, 6)
  .then(function (data) {
    console.log(data) // [ 3, 6, 9 ]
  })

function sum (a, b, cb) {
  cb(null, a, b, a + b)
}
