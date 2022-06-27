let player1 = prompt("Insert Name of player 1", "player-1");
let player2 = prompt("Insert Name of player 2", "player-2");
let choice1 = "HEAD";
let choice2 = "TAIL";

document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;

document.getElementById("clickbutton").addEventListener("click", myFunction);

function myFunction() {
  let output = Math.round(Math.random());
  console.log(output);
  if (output === 1) {
    document.getElementById("winner-choice").innerHTML = "head!";
    document.getElementById("winner-name").innerHTML = document.getElementById("player1").innerHTML+" wins!!";
  } else {
    document.getElementById("winner-choice").innerHTML = "tail!";
    document.getElementById("winner-name").innerHTML = document.getElementById("player2").innerHTML+" wins!!";
  }
}


document.getElementById("swapbutton").addEventListener("click", swapFunction);

function swapFunction() {
  let checkPlayer1 = document.getElementById("player1").innerHTML;
  let checkPlayer2 = document.getElementById("player2").innerHTML;

  if(checkPlayer1===player1){
    document.getElementById("player1").innerHTML = player2;
    document.getElementById("player2").innerHTML = player1;
  }
  else{
    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
  }
}
