readline()
const words = readline().split(' ')
const n = Number(readline())

const dict = {}
// for i in range(n)
for(let i = 0; i < n; i++){
    const [from,to]= readline().split(' ')
    dict[from]=to
}
print(words.map(w=>dict[w]).join(' '))