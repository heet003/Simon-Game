var level = 0;
var colors = ["green", "red", "yellow", "blue"]
var userPattern = [];
var randPattern = [];
var started = false;
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        randGenerator();
        started = true;
    }
});

$("div.btn").click(function () {
    userPattern.push(this.classList[1]);
    colorPressed(this.classList[1]);
    // console.log(this.classList[1]);
    check();
});

function randGenerator() {
    if (level > 0) {
        $("#level-title").text("Level " + level);
    }
    level++;
    var randNumber = Math.floor(Math.random() * (4));
    // console.log(colors[randNumber]);
    animate(colors[randNumber]);
    randPattern.push(colors[randNumber]);
}

function check() {
    // console.log(userPattern);
    // console.log(randPattern);
    // console.log(level);
    if (userPattern.length === randPattern.length) {
        if (userPattern[level - 1] === randPattern[level - 1]) {
            randGenerator();
            userPattern = [];
        } else {
            playSound("wrong");
            gameOver();
        }
    }
}

function colorPressed(r) {
    $("div." + r).toggleClass("pressed");
    setTimeout(() => {
        $("div." + r).toggleClass("pressed");
    }, 50);
    playSound(r);
}

function animate(colour) {
    $("div#" + colour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(colour);
}

function playSound(x) {
    var s = new Audio("./sounds/" + x + ".mp3");
    s.play();
}

function gameOver() {
    level = 0;
    level = 0;
    userPattern = [];
    randPattern = [];
    started = false;
    $("#level-title").text("Game Over, Press Any Key To Restart.");
    playSound("wrong");
    $("body").toggleClass("game-over");
    setTimeout(() => {
        $("body").toggleClass("game-over");
    }, 1000);
}