// function isGreaterThan20(num){
//     if(num>20){
//         return true
//     }
//  }
 
//  function students(list_of_marks){
//     var count=0
//     for(var i of list_of_marks){
//         var result= isGreaterThan20(i)
//         if (result === true){
//             count++
//         }
//     }
//     console.log(count);
//  }
//  students([21,25,19,25,33,54])

function students(listofmarks){
    var count=0
    var i=0
    while(i<listofmarks.length){
        if(listofmarks[i]>20){
            count++;
        }
        i++;
    }
    console.log(count)
}
students([21,25,19,25,33,54])
