// Quiz Questions
const questions = [
    {
      question: "JavaScript is ...?",
      options: ["Written in coffee", "the written form of the Java programming language", "a programming language for the Internet", "stressfull"],
      correctAnswer: "a programming language for the Internet",
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
      question: "How do you declare an array in JavaScript?",
      options: ["let theArray = []", "Well! I do declare My Array!", "let theArray = ()", "An array is a collection of data elements"],
      correctAnswer: "let theArray = []",
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
 //const element = document.getElementById("")