function simple(a){
  let del = 0;
  let out = "";
  for(let i = 2; i<=a/2; i++){
    if( a % i === 0){
      del++;
    }
  }
  if( del === 0){
    out = "является простым числом";
  }
  else{
    out = "не является простым числом";
  }
  return out;
}
console.log(`139 ${simple(139)}`);
console.log(`348 ${simple(348)}`);