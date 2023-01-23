function ex(func, a){
  b = 10;
  c = func(a, b);
  return function(){
    console.log(c);
  }
}
function sum(a, b){
  c = a + b;
  return c;
}
const funcRes = ex(sum, 5);
funcRes();