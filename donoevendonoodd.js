var list1=[2, 6, 18, 10, 3, 75]
var list2=[6, 19, 24, 12, 3, 87]
var i=0;
var c1=0;
var c2=0;
while(i<list1.length){
    var j=0;
    while(j<list2.length){
        if(list1[i]%2===0 && list2[j]%2===0){
            c1=c1+1
            console.log(c1,'dono even hai')
        }
        else{
            c2=c2+1
            console.log(c2,"dono odd hai")
        }
        j++;
    }
    i++;
}
