
  // Start the quiz
  function startQuiz() {
    let score = 0;
  
    // Ask each question
    for (let i = 0; i < questions.length; i++) {
      const currentQuestion = questions[i];
      const userAnswer = prompt(`${currentQuestion.question}\n${currentQuestion.options.join(', ')}`);
  
      // Check if the answer is correct and make all answers lowercase to remove any capitalization issues
      if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
        alert("Correct!");
        score++;
      } else {
        alert(`Wrong! The correct answer is ${currentQuestion.correctAnswer}`);
      }
    }
  // Store the score to local storage
  const storedScore = localStorage.getItem('quizScore');
  if (storedScore !== null) {
    if (storedScore < score) {
  localStorage.setItem('quizScore', score);
    } 
    // Display the final score
    alert(`Quiz completed!\nYour score: ${score} out of ${questions.length}`);
  }
}
  
    
  

 // Set button event to run startQuiz()
 //const element = document.getElementById("")