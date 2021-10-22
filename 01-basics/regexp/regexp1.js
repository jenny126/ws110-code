// var r = /\d+/g
<<<<<<< HEAD
var r = /\d+/
var text = `name:25 age:52 tel:313534`
=======
// var r = /\d+/
var r = /[0-9]+/g
var text = `name:ccc age:52 tel:313534`
>>>>>>> fd3ce09a6e0d8d3150647915e998fa3195e3a8f0
var m = text.match(r)
console.log('m=', m)
