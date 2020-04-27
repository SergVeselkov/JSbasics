/* Определение функции */
foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Определение функции через выражение */
baz(); // TypeError: baz is not a function

var baz = function() {
  console.log("bar2");
};
{
    
}