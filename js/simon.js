$(document).ready(function() {


    let answerSequence = [];
    const options = ["red", "blue", "yellow", "green"];
    let guesses = [];
    let round = 1;

    // create an array from the jquery html collection
    const colors = Array.from($(".box"));
    console.log(colors);

    // use the forEach loop on that array
    colors.forEach(function(color) {
        // event listener for the mouse up for each div item
        color.addEventListener("click", function() {
            // the id of the div object is the color
            guesses.push(color.id);
            console.log(color.id);
            if(comparison(guesses, answerSequence)) {
                console.log("wrong");
            } else {
                console.log("right");
            }
        });
    });

    $("start").on("click", function() {
        addColor(options, answerSequence);
        round++;
        console.log(answerSequence);
        lightColors(answerSequence);
    })

    function addColor(sequence, answers) {
            let index = Math.floor(Math.random() * 4);
            answers.push(options[index]);
    }

    function lightColors(arr) {
        let copy = arr;
        for(let i = 0; i < arr.length; i++) {
            colors.forEach(function(color) {
                if(arr[i] === color.id.toString()) {
                    color.style.opacity = "1";
                    copy.shift();
                }
            })
        }
      }

      function comparison(arr1, a2) {
        console.log(arr1);
        console.log(a2);
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== a2[i]) {
                return true;
            }
        }
    }







});