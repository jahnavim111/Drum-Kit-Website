
//detecting the button presses using mouse
var noOfDrumButtons=document.querySelectorAll(".drum").length;

for (var i=0;i<noOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });

    //what to do when drum is clicked
}

//detecting the key presses on the keyboard
document.addEventListener("keydown",function (event){
    playSound(event.key);
    buttonAnimation(event.key);
});

//function to play sounds
function playSound(key){
    switch(key){
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            
    }
}

function buttonAnimation(currentKey){
    var curr=document.querySelector("."+currentKey);
    curr.classList.add("pressed");
    setTimeout(function (){
        curr.classList.remove("pressed");
    },100);
     

}
