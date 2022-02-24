function show(){
    console.log("I am show function")
  }
  function Hicallback(callabck){
    //without params
    callabck();
  }
  Hicallback(show);
     