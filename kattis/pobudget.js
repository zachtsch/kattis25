const n = Number(readline())
const nums = [...Array(n)].map(_=>{readline(); return Number(readline())})
const sum = nums.reduce((a,b)=>a+b,0)

// const num2 = [...Array(2*n)].map(_=>readline()).filter((_,i)=>i%2==1)
// print(nums)
// let sum = 0;
// for(let i = 0; i < n; i++){
//     readline() //discard name
//     sum+=Number(readline())
// }
//Nekad -
//Usch, vinst +
//Lagom 0

if(sum == 0)     print('Lagom')
else if(sum > 0) print('Usch, vinst')
else             print('Nekad') 