var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var i=0
var empty=[]
while(i<number_list.length){
    var j=0
    while(j<number_list.length){
        if(number_list[i]===number_list[j]){
            empty.push(number_list[i])

        }
        j++;
    }
    i++;
}
console.log(empty)

uniques=[]
duplicates=[]
for(var i of number_list){
  if(!uniques.includes(i)){
      uniques.push(i)
  }
}
 
for(var j of uniques){
  count=0
  for(var k of number_list){
      if (j === k){
          count+=1
      }
  }
 if(count >1){
   duplicates.push(j);
 };
}
 
console.log(duplicates);