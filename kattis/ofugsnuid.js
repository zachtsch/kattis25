const n = Number(readline());
// print(Array(n))
// [...Array(n)].forEach(x=>print(x))
// [...Array(n)].map(_=>readline())
print([...Array(n)].map(_=>readline()).reverse().join('\n'))

// const ar = []
// for(let i = 0; i < n; i++){
//     ar.push(readline())
// }
// for(let i = n-1; i >= 0; i--){
//     print(ar[i])
// }