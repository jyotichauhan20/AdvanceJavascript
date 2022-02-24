var Fruits = ['apple', 'mango','grapes','strawberry','orange']
var output=[];
for(j of Fruits){
    if(j[0]==='a' || j[0]==='i' || j[0]==='o' || j[0]==='u' || j[0]==='e'){
        output.push(j)
    }
}
console.log(output);
