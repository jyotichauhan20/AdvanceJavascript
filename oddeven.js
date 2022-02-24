var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];

var i=0;
var even=0;
var odd=0
while(i<elements.length){
    if(elements[i]%2===0){
        even+=1

    }else{
        odd+=1
    }
    i+=1
}
console.log(odd,'odd')
console.log(even,'even')
