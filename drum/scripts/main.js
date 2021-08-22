function onKeyDown(e) {
    var sound=document.querySelector("#"+e.key);
    if(sound) {
        sound.currentTime =0
        sound.play();
        }
    var button=document.querySelector("div.button."+e.key);
    if(button) {
        button.classList.add("playing")
    }
}
function removeClass(){
    this.classList.remove("playing");
}
window.addEventListener("keydown", onKeyDown);
var buttons= document.querySelectorAll(".button");
buttons.forEach(button=>{
    button.addEventListener("transitionend",removeClass)
})
