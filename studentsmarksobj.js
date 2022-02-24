var readline = require('readline-sync');
var students={}
for (let step = 0; step <3; step++){
   var name =readline.question("Enter your name:");
   var marks=readline.questionInt("Enter the marks");
   students[name]=marks;
}
console.log(students);