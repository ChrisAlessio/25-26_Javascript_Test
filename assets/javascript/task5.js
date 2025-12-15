/* Put code for the task below */
function nameEmpty(){
    if(document.getElementById("fullName").value === ""){
        document.getElementById("fullName").style.backgroundColor="red"
    }else{
        document.getElementById("fullName").style.backgroundColor="white"
    }
}
function addressEmpty(){
    if(document.getElementById("address").value === ""){
        document.getElementById("address").style.backgroundColor="red"
    }else{
        document.getElementById("address").style.backgroundColor="white"
    }
}
function phoneEmpty(){
    if(document.getElementById("phone").value === ""){
        document.getElementById("phone").style.backgroundColor="red"
    }else{
        document.getElementById("phone").style.backgroundColor="white"
    }
}
function emailEmpty(){
    if(document.getElementById("email").value === ""){
        document.getElementById("email").style.backgroundColor="red"
    }else{
        document.getElementById("email").style.backgroundColor="white"
    }
}