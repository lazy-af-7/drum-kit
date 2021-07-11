function handleClick()
{
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    addButtonAnimation(buttonPressed);
}


var len=document.querySelectorAll(".drum").length;
for (var i=0; i<len; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


document.addEventListener("keypress",function(event){
    var keyPressed = event.key;
    makeSound(keyPressed);
    addButtonAnimation(keyPressed);
});


function makeSound(buttonPressed){
    switch(buttonPressed)
    {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}


function addButtonAnimation(buttonPressed){
    var activeButton = document.querySelector("."+buttonPressed);
    console.log(activeButton.classList.add("pressed"));
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },140)
}
