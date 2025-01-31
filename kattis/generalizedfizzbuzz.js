const [n,a,b] = readline().split(' ').map(Number)
let [fizz,buzz,fizzbuzz] = [0,0,0]
for(let i = 1; i <= n; i++){
    if(i%a == 0 && i%b==0) fizzbuzz++;
    else if(i%a == 0)      fizz++;
    else if(i%b == 0)      buzz++;
}
print(fizz,buzz,fizzbuzz)