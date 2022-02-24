var place={name:"paris",country:"France"}
var duplicate=Object.assign({},place);
// copy an objects without spread
console.log(duplicate)

var duplicate ={...place}
//copy the object with spread
console.log(duplicate);

