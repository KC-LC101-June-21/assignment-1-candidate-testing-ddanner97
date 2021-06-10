const input = require('readline-sync');

let candidateName

let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer;

let questions = ["1) Who was the first America woman in space?\n ",
                "2) True or false: 5 kilometer == 5000 meter?\n ",
                "3) (5+3)/2 * 10?\n ",
                "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?\n ",
                "5) What is the minimum crew size for the ISS?\n "];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

let candidateAnswers = [];

function askForName() {
  
  return input.question("Enter your name: ")
}

function askQuestion() {
  
  for (let i = 0; i < questions.length; i++){
    candidateAnswers[i] = input.question(questions[i] + "Your Answer: ")
    console.log("Correct Answer: " + correctAnswers[i] + "\n")
  }
  
}

function gradeQuiz(candidateAnswers) {

  let correctCount = 0

  for (let i = 0; i < questions.length; i++){
    
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
      correctCount ++
    }

  }

  let grade = (correctCount / 5) * 100;
  
  return grade;
}

function runProgram() {
  // Get name and Greet
  candidateName = askForName();
  console.log("Hello," + candidateName + "\n")
  
  //Ask question
  askQuestion();

  //Grade quiz
  let grade = gradeQuiz(candidateAnswers)
  console.log(">>> Overall Grade: " + grade + "% (" + ((grade/100)*5) + " of 5 responses correct) <<<")

  if (grade[0] < 60){
    console.log(">>> Status: FAILED <<<\n")
  } else {
    console.log(">>> Status: PASSED <<<\n")
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};