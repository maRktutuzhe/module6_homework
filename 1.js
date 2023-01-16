function evenOrOdd(){
  let mas = [1,6,8,2,3, 0, true, "da", 5, null];
  let even = 0;
  let odd = 0;
  let zero = 0;
  let nan = 0;
  mas.forEach(function(item, index, array){
    if(typeof item == "number"){
      if (item % 2 == 1){
        odd++;
      }
      if(item === 0){
        zero++;
      }
      if(item % 2 === 0 && item !==0){
        even++;
      }
    }
    else{
      nan++;
    }
  })
  console.log(`Четных: ${even}, Нечетных: ${odd}, Нулей: ${zero}, Не иявляются числами: ${nan}`);
}
evenOrOdd();