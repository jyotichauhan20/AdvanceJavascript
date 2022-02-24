function show(a){
    console.log("I am show function "+a)
}
function geeky(callabck){
    //with params
    var a=109;
    callabck(a);
}
geeky(show);


