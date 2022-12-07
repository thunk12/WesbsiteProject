//Check Answers & Calculate Score
function checkscore() {
  let ans1 = document.getElementById("q1").value;
  let ans2 = document.getElementById("q2").value;
  let ans3 = +document.getElementById("q3").value;
  let ans4 = document.getElementById("q4").value;
  let ans5 = +document.getElementById("q5").value;
  let ans6 = document.getElementById("q6").value;
  let ans7 = document.getElementById("q7").value;

  if (ans1 === "yes") {
    score1 = 1;
  } else {
    score1 = 0;
  }
  if (ans2 === "yes") {
    score2 = 1;
  } else {
    score2 = 0;
  }
  if (ans3 > 0) {
    score3 = 1;
  } else {
    score3 = 0;
  }
  if (ans4 === "yes") {
    score4 = 1;
  } else {
    score4 = 0;
  }
  if (ans5 === 1) {
    score5 = 1;
  } else {
    score5 = 0;
  }
  if (ans6 === "yes") {
    score6 = 1;
  } else {
    score6 = 0;
  }
  if (ans7 === "yes") {
    score7 = 1;
  } else {
    score7 = 0;
  }

  //Calculation
  let pretotal =
    ((score1 + score2 + score3 + score4 + score5 + score6 + score7) / 7) * 100;
  let total = pretotal.toFixed(0);

  //Output
  document.getElementById("output").innerHTML = total;
  if (total === "100") {
    textout = "You Pass! You are cleared to rent a snail from us!";
  } else {
    textout = "You Fail. Study better and you might pass next time!";
  }
  document.getElementById("textout").innerHTML = textout;
}

//Event Listener For Quiz Button
document.getElementById("testbtn").addEventListener("click", checkscore);
