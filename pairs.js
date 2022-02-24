var n = [10, 11, 12, 13, 14, 17, 18, 19]
var number =30;
var output=[]
// for(var i of n){
//    for(var j of n){
//        if (i+j === number){
//            output.push([i,j])
//        }
//   }
// }
var i=0;
while (i<n.length){
    var j=0;
    while(j<n.length){
        if(n[i]+n[j]===number){
            output.push(n[i],n[j])
        }
        j++;

    }
    i++;

}
console.log(output);