var score = 0;
var round = 1;

function generateProblem(operation) {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var problemText = "";

  switch (operation) {
    case "addition":
      problemText = num1 + " + " + num2 + " =";
      return num1 + num2;
    case "subtraction":
      problemText = num1 + " - " + num2 + " =";
      return num1 - num2;
    case "multiplication":
      problemText = num1 + " x " + num2 + " =";
      return num1 * num2;
    case "division":
      var product = num1 * num2;
      problemText = product + " / " + num1 + " =";
      return num2;
  }

  document.getElementById("problem").innerHTML = problemText;
}

function checkAnswer() {
  var answer = parseInt(document.getElementById("answer").value);
  var operation = document.getElementById("operation").value;

  var correctAnswer = generateProblem(operation);

  if (answer === correctAnswer) {
    score++;
    document.getElementById("score").innerHTML = score;
    round++;
    document.getElementById("round").innerHTML = round;
  } else {
    round++;
    document.getElementById("round").innerHTML = round;
  }

  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
}

var operationSelect = document.getElementById("operation");
operationSelect.addEventListener("change", function() {
  var operation = operationSelect.value;

  // Show the hidden item
  document.getElementsByClassName("problem-container")

});
