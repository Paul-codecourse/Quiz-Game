
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
    
  localStorage.setItem('quizScore', score);


    // Display the final score
    alert(`Quiz completed!\nYour score: ${score} out of ${questions.length}`);
  }
  
    // Display the score on the high score page
    // Retrieve the score from local storage and display it on the HTML page
   function displayScore() {
      const storedScore = localStorage.getItem('quizScore');
      const scoreDisplay = document.getElementById('scoreDisplay');
   //need to edit and add watershed mark for high score as well as interval to time and change scoring algorithm to be time based
      if (storedScore !== null) {
        scoreDisplay.textContent = `Your previous score: ${storedScore} out of ${questions.length}`;
        } else {
        scoreDisplay.textContent = 'No previous score available.';
        }
  }
  

 // Set button event to run startQuiz()
 //const element = document.getElementById("")