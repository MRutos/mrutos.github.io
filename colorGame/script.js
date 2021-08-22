var R;
var G;
var B;
var key = document.getElementById("keyColor");
var randomSix
var reset = document.getElementById("reset");
var Ra;
var Ga;
var Ba;
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var hardSquares = document.querySelector("div.container.hard");
var squaresNumber = 6;
var squares = document.querySelectorAll(".square");
var header = document.querySelector("div.header");

function keyColor(){
    R = String(Math.round(Math.random()*255));
    G = String(Math.round(Math.random()*255));
    B = String(Math.round(Math.random()*255));
}

function makeKey(){
    key.textContent = "RGB("+R+", "+G+", "+B+")";
}

function answerSquare(){
    randomSix = String(Number(Math.ceil(Math.random()*squaresNumber)));
    var square = document.getElementById(randomSix);
    square.style.backgroundColor= 'rgb(' + R + ',' + G + ',' + B + ')';
    Ra = R;
    Ga = G;
    Ba = B;
}

function colorRest(){
    for(i=1; i<=6; i++){
        if (i != randomSix){
            keyColor();
            var square = document.getElementById(String(i));
            document.getElementById(String(i)).classList.remove("invisible");
            square = square.style.backgroundColor= 'rgb(' + R + ',' + G + ',' + B + ')';
        }
    }
    header.style.backgroundColor= 'rgb(70, 130, 180)';
}

function correctColor(){
        for (i=1; i<=6; i++){
            document.getElementById(String(i)).style.backgroundColor= 'rgb(' + Ra + ',' + Ga + ',' + Ba + ')';
            document.getElementById(String(i)).classList.remove("invisible");
        };
        header.style.backgroundColor= 'rgb(' + Ra + ',' + Ga + ',' + Ba + ')';
        document.querySelector("span.comment").textContent= "Correct!";
        reset.textContent= "PLAY AGAIN?";
    }

function checkColor(){
    for(i=0; i<6; i++){
        squares[i].addEventListener("click",function(){
            if(this.style.backgroundColor != "rgb(" + Ra + ", " + Ga + ", " + Ba + ")"){
                this.classList.add("invisible");
                document.querySelector("span.comment").textContent= "Try Again!";
            }else{
                correctColor();
            }
        })
    }
}

function newGame(){
    document.querySelector("span.comment").textContent= " ";
    keyColor();
    makeKey();
    answerSquare();
    colorRest();
    checkColor();
    reset.textContent= "NEW COLORS"
}

function easyGame(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    hardSquares.classList.add("hidden");
    squaresNumber = 6;
    colorRest();
    squaresNumber = 3;
    newGame();
}

function hardGame(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    hardSquares.classList.remove("hidden");
    squaresNumber = 6;
    newGame();
}
newGame();

reset.addEventListener("click", newGame);
easy.addEventListener("click", easyGame);
hard.addEventListener("click", hardGame);