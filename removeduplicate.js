// without a spread operator
let array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
myNewArray=[]
for (i of array1){
  if (!myNewArray.includes(i)){
     myNewArray.push(i)
  }
}
console.log(myNewArray);//[ 1, 2, 3, 4, 6 ]
 
