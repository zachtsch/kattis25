// 1 -- 2 -- 3

// 4 -- 5

const [n,m] = readline().split(' ').map(Number)
const graph = [...Array(n+1)].map(_=>[])
for(let i = 0; i < m; i++){
    const [u,v] = readline().split(' ').map(Number)
    graph[u].push(v);
    graph[v].push(u);
}
const marked = [...Array(n+1)].map(_=>false)
function dfs(start){
    let [cnt,stack] = [0,[start]]
    while(stack.length > 0){
        const here = stack.pop()
        if(marked[here]) continue;
        marked[here] = true;
        cnt++;
        for(const next of graph[here]){
            stack.push(next)
        }
    }
    return cnt;
}
print([...Array(n+1)].map((_,i)=>dfs(i)).reduce((a,b)=>b>a?b:a))