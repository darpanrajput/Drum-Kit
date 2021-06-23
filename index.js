
// function handleClick(){
// 	var audio=new Audio("sounds/tom-1.mp3");
// 	audio.play();
// }


for (var i = 0; i <document.querySelectorAll(".drum")
	.length; i++) {

 document.querySelectorAll(".drum")[i]
.addEventListener("click",function(){
/* this.style.color="white";*/
 
 var buttonInnerHTML=this.innerHTML;
 makeSound(buttonInnerHTML);
 animation(buttonInnerHTML);
});
}


function makeSound(key){

switch (key) {
 	case "w":
 		playSound("sounds/tom-1.mp3")
 		break;
 	case "a":
 	    playSound("sounds/tom-2.mp3");
 		break;
 	case "s":
 	    playSound("sounds/tom-3.mp3");
 		break;
 	case "d":
 	    playSound("sounds/tom-4.mp3");
 		break;
 	case "j":
 	    playSound("sounds/snare.mp3");
 		break;
 	case "k":
 	    playSound("sounds/crash.mp3");
 		break;	
 	case "l":
 	    playSound("sounds/kick-bass.mp3");
 		break;	

 	default:console.log("Invalid");
 }

}

//play sounds from the souce
function playSound(path){
	var audio=new Audio(path);
 	audio.play();
}

//detect the keys
document.addEventListener("keydown",function(event){
	console.log('key pressesd');
	makeSound(event.key)
    animation(event.key);
});

//button animation


function animation(currentKey)
{
    console.log("key="+currentKey);
if (currentKey!=null && isNaN(currentKey) && validatKeys(currentKey)) {
var btn_pressed=document.querySelector("."+currentKey);
btn_pressed.classList.add("pressed");
setTimeout(function(){
    btn_pressed.classList.remove("pressed");},100)
}
}

function validatKeys(keyName){
    switch (keyName) {
        case "a":
        case "w":
        case "s":
        case "d":
        case "j":
        case "k":
        case "l":
        return true;     
        default:return false;
    }
}


