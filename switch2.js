let readline = require('readline-sync')
let arg = readline.question("Enter a value?");
//let arg = '8'
switch (arg) {
case '5':
case '6':
  console.log( 'five or six' );
  break;
case '7':
  console.log( 'Seven' );
  break;
case 8:
  console.log( 'Never executes!' );
  break;
default:
  console.log( 'An unknown value' ); 
  //In that this output will come An unknown value because its checking type also
 
//   break;
}
