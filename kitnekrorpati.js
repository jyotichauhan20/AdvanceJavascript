var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
 
var count_of_crorepati=0;
var count_of_lakhpati=0;
var count_of_dilwale=0;
var i=0;
while(i<kitna_paisa_hai.length){
   if(kitna_paisa_hai[i]>= 10000000){
       count_of_crorepati+=1
   }
   else if(kitna_paisa_hai[i]>=100000){
       count_of_lakhpati+=1
   }
   else{
       count_of_dilwale+=1
   }
   i++;
}
 
console.log(count_of_crorepati,"count_of_crorepati");
console.log(count_of_lakhpati,'count_of_lakhpati');
console.log(count_of_dilwale,'count_of_dilwale');