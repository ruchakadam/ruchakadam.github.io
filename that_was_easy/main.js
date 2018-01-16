
function sayEasy(){
    var easySound = new Audio("that_was_easy.mp3");
    easySound.play();
}

$("#easy").on("click", sayEasy);
$(document).keypress(key);

function key(event){
    if(event.charCode == 32)
       $("#easy").trigger("click");
}