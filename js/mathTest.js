$(document).ready(function() {

    const ops = ["+", "-", "*", "/"];
    const userInput = $("#answer");
    let answer;

    $("#start").on("click", function () {

        let ran1 = Math.floor(Math.random() * 100) + 1;
        let ran2 = Math.floor(Math.random() * 100) + 1;

        // console.log(ran1);
        // console.log(ran2);
        let randomIndex = Math.floor(Math.random() * ops.length);

        $("#first").text(ran1);
        $("#operator").text(ops[randomIndex]);
        $("#second").text(ran2);

        // console.log(calculate(ran1, ran2, ops[randomIndex]));

        answer = calculate(ran1, ran2, ops[randomIndex]);

    });

    $("#submit").on("click", function() {
        // console.log(answer);
        // console.log(userInput.val());
        let yourAnswer = parseFloat(userInput.val());
        let outputVal;
        if(answer === yourAnswer) {
            // console.log("correct");
            outputVal = "Correct!";
        } else {
            outputVal = "Wrong.";
        }

        $("#output").text(outputVal);
    });

    function calculate(x, y, op) {
        // console.log(x, op, y);

        if (op === "+") {
            return x + y;
        } else if (op === "-") {
            return x - y;
        } else if (op === "*") {
            return x * y;
        }
            return x / y;
    }
});