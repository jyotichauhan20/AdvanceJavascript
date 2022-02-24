var num=[12,34,56,100,3,67]
var max=0;
var secmax=0;
var thirdmax=0;
var i=0;
while(i<num.length){
    if(num[i]>max){
        max=num[i]
    }i++;
    var j=0;
    while(j<num.length){
        if (max>num[j] && secmax<num[j]){
            secmax=num[j]
        }j++;
        var k=0;
        while(k<num.length){
            if(secmax>num[k] && thirdmax<num[k]){
                thirdmax=num[k]
            }k++;
        }
    }
}
console.log(max)
console.log(secmax)
console.log(thirdmax)
