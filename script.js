document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is loaded and running.");

    // Function to append number or operator to the result
    function appendToResult(value) {
        console.log(`Button clicked: ${value}`); // Log which button was clicked
        var resultField = document.getElementById('result');
        resultField.value += value;  // Append value to the input field
        console.log(resultField.value);  // Log the current value of the input field
    }

    // Function to clear the result
    function clearResult() {
        console.log("Clearing result"); // Log when the clear button is clicked
        var resultField = document.getElementById('result');
        resultField.value = '';  // Clear the input field
    }

    // Function to calculate the result
    function calculateResult() {
        console.log("Calculating result"); // Log when the calculate button is clicked
        try {
            var resultField = document.getElementById('result');
            let result = eval(resultField.value);  // Evaluate the expression in the input field
            resultField.value = result;  // Update the input field with the result
            console.log(result);  // Log the result
        } catch (error) {
            var resultField = document.getElementById('result');
            resultField.value = 'Error';  // Display 'Error' if there's an issue with eval
        }
    }

    // Attach event listeners to each button
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.innerText;
            console.log(`Clicked button: ${value}`); // Log which button is clicked
            if (value === '=') {
                calculateResult();
            } else if (value === 'C') {
                clearResult();
            } else {
                appendToResult(value);
            }
        });
    });
});
