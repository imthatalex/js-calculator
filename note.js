// Revision : 2/2023

/*

Deciding to Write a Note to Address How I would Re-Write this Code Today.

- Render Calculator by Iterating through an Array and Creating Elements
- Simplify the Functionality by Pushing Values to an Array and Returning the Output based on the Operator Chosen


*/

// Basic Example 
function simpleCalc() {
    // clear input field when operator is selected
    // pushed inputValue to array
    const userInputs = [21, "+", 45]

    function eval(expression) {
        let a = userInputs[0];
        let b = userInputs[1];
        let c = userInputs[2];

        expression = b;
        // can be written using switch
        if (expression == "+") {
            console.log(a + c);
            let d = a + b;
            // clear userInputs
            // push d to userInputs in event user decides to keep using calc

            // add clear/reset calc func
        }
    }

    return eval();
}

simpleCalc();


// this is just a rudimentary thought process on how I would re-do this project.