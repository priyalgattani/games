var randNo1 = Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src", 'images/dice' + randNo1 + '.png');
var randNo2 = Math.floor(Math.random()*6+1);
document.querySelector(".img2").setAttribute("src", 'images/dice' + randNo2 + '.png');

if (randNo1 > randNo2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randNo2 > randNo1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
