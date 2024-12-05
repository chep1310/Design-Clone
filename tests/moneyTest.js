import { formatCurrency } from "../scripts/utils/money.js";

//normal test cases
console.log('convert cents to dollar')
if(formatCurrency(2095)==='20.95'){
  console.log('passed');
}else{
  console.log('failed');
};



//edge test cases
console.log('works with 0')
if(formatCurrency(0)==='0.00'){
  console.log('passed');
}else{
  console.log('failed');
};

console.log('rounds the number to the nearest cent')
if(formatCurrency(2000.5)==='20.01'){
  console.log('passed');
}else{
  console.log('failed');
};