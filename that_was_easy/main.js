
function sayEasy(){
    var easySound = new Audio("that_was_easy.mp3");
    easySound.play();
}

$("#easy").on("click", sayEasy);
