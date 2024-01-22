function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

function calculateLetterGrade(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function repeatProgram() {
    let repeat = prompt("Do you want to repeat the program? (yes/no)").toLowerCase();
    return repeat === 'yes';
}

let scores = [];
let numAssignments = parseInt(prompt("Enter the number of assignments to grade (maximum of 10):"));

while (isNaN(numAssignments) || numAssignments <= 0 || numAssignments > 10) {
    numAssignments = parseInt(prompt("Invalid input. Enter a number between 1 and 10:"));
}

for (let i = 1; i <= numAssignments; i++) {
    let score = parseFloat(prompt(`Enter the score for assignment ${i} (percentage):`));
    while (isNaN(score) || score < 0 || score > 100) {
        score = parseFloat(prompt(`Invalid input. Enter a score between 0 and 100 for assignment ${i}:`));
    }
    scores.push(score);
}

if (repeatProgram()) {
    // Repeat the program
    scores = []; // Reset scores for the next run
    numAssignments = parseInt(prompt("Enter the number of assignments to grade (maximum of 10):"));
    // ... (Repeat the rest of the program)
}
let average = calculateAverage(scores);
let letterGrade = calculateLetterGrade(average);

console.log(`Continuous Average: ${average.toFixed(2)} (${letterGrade})`);