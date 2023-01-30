let rollButton = document.getElementsByClassName("roll-button");

let playerOneDice = document.querySelector(".dice-p1");
let playerTwoDice = document.querySelector(".dice-p2");

console.log();



let setDice = function() {
    let randomNumberOne = Math.floor(6*Math.random())+1;
    let randomNumberTwo = Math.floor(6*Math.random())+1;
    let dice1img = "dice-" + randomNumberOne + ".jpg";
    let dice2img = "dice-" + randomNumberTwo + ".jpg";
    console.log(dice1img);
    playerOneDice.setAttribute("src",dice1img);
    playerTwoDice.setAttribute("src",dice2img);
}