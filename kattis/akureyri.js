const n = Number(readline());
const dict = [...Array(n)].map(_=>{readline(); return readline()})
                 .reduce((a,b)=>{a[b]=(a[b]??0)+1; return a;},{})

// for(let i = 0; i < n; i++){
//     readline();
//     const loc = readline()
//     dict[loc]=(dict[loc]??0)+1;
//     // if(loc in dict) dict[loc]++;
//     // else            dict[loc]=1;
// }
//.items,.keys,.values
for(const [k,v] of Object.entries(dict)) print(k,v)