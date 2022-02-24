function Lower(string){
    var output=""
    // let lowerAscii = 'a'.charCodeAt(0);
    // let lowerAscii2 = 'z'.charCodeAt(0);
    // let upperAscii = 'A'.charCodeAt();
    // let upperAscii2 = 'Z'.charCodeAt();
    for(j of string){
        var a=j.charCodeAt();
        if(a>=65 && a<=90){
            var str=a + 32
            //Here i took 32 because the difference was 32.
            var newConvert=String.fromCharCode(str)
            output+=newConvert
        }
        else{
            output=output+j
        }
    }
    return output
}
module.exports={Lower}









