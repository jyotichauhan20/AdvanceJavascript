function license_checker(speed){
    if(speed < 70){
        console.log("ok");
    }
    if(speed > 70){
        var points=0
        for(var i=70;i<speed;i+=5){
            points+=1
        }
        if(points>12){
            console.log("License suspended");
        }
        else{
            console.log(points);
        }
    }
 }
  
 license_checker(135);