var prompt=require('readline-sync')
let num=prompt.question('enter input=')
let dict={"name":"Raju", "marks":56}

for (i in dict){
    if(i==num){
        console.log("yes existing")
        break
    }
    else{
        console.log("noooo")
    }
}
