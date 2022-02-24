var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0;
var sumodd=0
var sumeven=0
while(i<elements.length){
    if(elements[i]%2===0){
        sumeven+=elements[i]
    }
    else{
        sumodd+=elements[i]
    }
    i++;
}
console.log(sumodd)
console.log(sumeven)

