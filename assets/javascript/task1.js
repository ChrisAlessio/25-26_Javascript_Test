/* Put code for the task below */
function showButton(){
    document.getElementById("buttonTask1").innerHTML="<button onclick = 'hideImage()' style='display:' id='buttonTask1'>Click Me</button>"
    //alert("test")
}

function hideImage(){
    document.getElementById("imageTask1").style.display="none"
}