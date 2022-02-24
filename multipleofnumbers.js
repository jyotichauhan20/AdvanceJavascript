// function multiplesOfNumbers(limit){
//     var sum=0
//     for(var i=0;i<=limit;i++){
//         if(i%3 ===0){
//             sum+=i;
//         }
//         if(i%5 ==0){
//             sum+=i;
//         }
//     }
//     console.log(sum);
//  }
// multiplesOfNumbers(10);

function multiplesOfNumbers(limit){
    var sum=0
    var i=0
    while(i<=limit){
        if(i%3===0){
            sum=sum+i
        }if (i%5===0){
            sum=sum+i
        }i++
    }
    console.log(sum);
 }
multiplesOfNumbers(10);
