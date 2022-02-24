function show(){
    console.log("I am show function..")
}
function geeky(callback){
    //synchronouse
    callback();
}
geeky(show)
console.log("enddddddd")


const addOne = (n) => n + 1
console.log(addOne(1))// 2
addOne(2) // 3
addOne(3) // 4
addOne(4) // 5..
