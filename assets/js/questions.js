// Quiz Questions
const questions = [
    {
      question: "Who is the current head of the Anglican Church?",
      options: ["Pope", "Dalai Lama", "King Charles", "Prince William"],
      correctAnswer: "King Charles",
    },
    {
      question: "What does the acronym HTML stand for?",
      options: ["Hot Tangy MeaL", "Handy To Make Leap", "Hip Top Man Leader", "Hyper Text Markup Language"],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "What is the best operating system? (Might be a bit biased)?",
      options: ["Windows", "Linux", "Gem", "Apple"],
      correctAnswer: "Linux",
    },
    {
        question: "Who is 'the' Dr?",
        options: ["Dr Who", "Dr No", "Dr Why", "Which Dr?"],
        correctAnswer: "Dr Who",
      },
  ];
  
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
  
    // Display the final score
    alert(`Quiz completed!\nYour score: ${score} out of ${questions.length}`);
  }
  
 // Set button event to run startQuiz()