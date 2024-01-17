// Display the score on the high score page
// Clear high score data
  
    // Retrieve the score from local storage and display it on the HTML page
    function displayScore() {
        const storedScore = localStorage.getItem('quizScore');
        const scoreDisplay = document.getElementById('highscores');
     //need to edit and add selection logic for watershed mark for high score as well as interval to time and change scoring algorithm to be time based
        if (storedScore !== null) {
          scoreDisplay.textContent = `Your highest score: ${storedScore} out of ${questions.length}`;
          } else {
          scoreDisplay.textContent = 'No previous score available.';
          }
    }
// Display the score on page loading
    window.onload = displayScore;

    function clearHighScore() {
        localStorage.removeItem('quizScore');
    }
