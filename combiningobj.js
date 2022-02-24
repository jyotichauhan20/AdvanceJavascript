var mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
var allCars=Object.assign(mynewCar,myOldCar)
//without spread combining obj
console.log(allCars)


var allCars={...mynewCar,...myOldCar}
//with spread
console.log(allCars);
