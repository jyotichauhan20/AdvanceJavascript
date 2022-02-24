d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}

var d3={}
for (i in d1){
    for(j in d2){
        if(i==j){
            d3[i]=d1[i]+d2[j]
        }
    }    
}  
console.log(d3)
