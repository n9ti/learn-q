var Q = require('q')

sum(3, 6)
  .then(function (data) {
    console.log(data) // [ 3, 6, 9 ]
  })

function sum (a, b) {
  var deferred = Q.defer()
  deferred.resolve([a, b, a + b])

  return deferred.promise
}
