let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5]
var n={}
for (i in list1){
    n[list1[i]]=list2[i]
}
console.log(n)