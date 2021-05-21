


//task1

convertFahrToCelsius = (num1) => {
      if ( typeof num1 === 'number'){
               C = (num1 - 32) * 5/9;
               return D = C.toFixed(4);
           }
  else{ return `${num1} is not a valid number but a ${typeof num1}` }
  };
  
  
  convertFahrToCelsius(40);



  
//task2


checkYuGiOh = (n) => {
  let result = [];
  if(isNaN(parseInt(n))) {
    console.log("fizzbuzz is meh");
  } else
  {
  for (let index = 1; index <= parseInt(n); index++) {

    if ((index % 2 == 0) && (index % 3 == 0) && (index % 5 == 0)) {
      result.push("Yu-Gi-Oh");
    }
    else if ((index % 2 == 0) && (index % 5 == 0)) {
      result.push("Yu-Oh");
    }
    else if ((index % 3 == 0) && (index % 5 == 0)) {
      result.push("Gi-Oh");
    }
    else if ((index % 2 == 0) && (index % 3 == 0)) {
      result.push("Yu-Gi");
    }
    else if (index % 2 == 0) {
      result.push("Yu");
    }
    else if (index % 3 == 0) {
      result.push("Gi");
    }
    else if (index % 5 == 0) {
      result.push("Oh");
    }
    else {
      result.push(index);
    }
    
  }
  console.log(result);
}
}

checkYuGiOh("20");
  
  