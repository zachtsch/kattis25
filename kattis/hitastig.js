readline() 
const nums = readline().split(' ').map(BigInt)
//readline().split(' ')    //['-3','-2','-1','0','1','2','3']
            //.map(Number) //[-3,-2,-1,0,1,2,3]
const min = nums.reduce((min,val)=>val<min?val:min)
const max = nums.reduce((max,val)=>val>max?val:max)
print(max,min)