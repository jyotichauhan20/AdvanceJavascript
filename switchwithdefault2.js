 
var day = "Thursday"
 
switch (day) {
   case "Sunday":
       console.log("Meeting with curriculum team")
       break;
 
   case "Monday":   
   case "Tuesday":
   case "Thursday":
   case "Friday":
   case "Saturday":
       console.log("Normal working day")
 
       break;
 
   case "Wednesday":
       console.log("Meeting with academics team")
       break;
 
   default:
       console.log("invalid input")
}
