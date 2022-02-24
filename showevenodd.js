function showNumbers(limit){
    for(i=1;i<=limit;i++){
        if(i%2 ===0){
            console.log(i,"  Even");
        }
        else{
            console.log(i," Odd");
        }
    }
 }
 showNumbers(3);