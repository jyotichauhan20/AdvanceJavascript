var arr1=[1,2,3]
var arr2=["a","b","c"]

newList=[]
for(i of arr1){
  newList.push(i)
  if (i==2){
     for(j of arr2){
        newList.push(j)
     }
  }
}
console.log(newList);
// output : [1,2,"a","b","c",3]
//by spread operator
console.log([1,2,...arr2,3]);


