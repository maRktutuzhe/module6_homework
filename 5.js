let math = (a, b) => {
  res = a;
  for( let i = 2; i <= b; i++){
    res = res * a; 
  }
  return res;
}
let out = math(2, 10);
console.log(out);