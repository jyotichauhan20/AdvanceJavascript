var twoDigit=[]
function specialNumber(list1) {
    for( i of list1){
        if (i >=10 && i<= 99){
            twoDigit.push(i)
        }
    }
}
var list1=[12,3,45,6,7,09,78,45]
specialNumber(list1);
console.log(twoDigit)

   