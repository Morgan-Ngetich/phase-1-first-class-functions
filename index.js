function receivesAFunction(callback) {
 console.log(callback())
}
receivesAFunction( callback => {'How are you?'})


function returnsANamedFunction() {
  function namedFunction() {}

  return namedFunction;
}

function returnsAnAnonymousFunction() {

  return function(){}
}