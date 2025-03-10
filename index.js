// Function that receives a function and calls it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function!");
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return () => console.log("I'm an anonymous function!");
}
