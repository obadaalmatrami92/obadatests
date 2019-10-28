function details() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        details();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

function startagain() {
    window.history.back();
}

// create questions
var questions = [

    // write down as many as youu want number of question 
    new Question("When was the first painting in the world? ", ["40,000 years old", "70 years old", "1000 years old", "200 Years old"], "40,000 years old"),
    new Question("When the first novel in the world was published? ", ["1785", "1992", "2000", "1719"], "1719"),
    new Question("What is the most famous novel in the world? ", ["To Kill a Mockingbird", "One Hundred Years of Solitude", "Anna Karenina", "Invisible Man"], "Anna Karenina"),
    new Question("Who is the best author of books? ", ["Gilbert Patten", "Enid Blyton", "Sidney Sheldon", "J. K. Rowling"], "Enid Blyton"),
    new Question("who is the best painter in the world? ", ["Rembrandt", "Vincent Van Gogh", "Leonardo Da Vinci", "Claude Monet"], "Leonardo Da Vinci"),
    new Question("what is the best selling novel in the world? ", ["Lord of the Rings", "A Tale of Two Cities", "Don Quixote", "Harry Potter and the Philosopher's Stone"], "Don Quixote"),
    new Question("what is the best science fiction book? ", ["The Broken Earth Trilogy by N.K. Jemisin", "Ender's Game Quartet by Orson Scott Card", "The Sprawl Trilogy by William Gibson", "Snow Crash by Neal Stephenson"], "The Sprawl Trilogy by William Gibson"),
    new Question("Who among the following is the author of the book India Remembered? ", ["J K Rowling", "Robert Dallek", "Pamela Mountbatten", "Stephen HawKING"], "Pamela Mountbatten"),
    new Question("Who wrote Devdas? ", ["Surdas", "Bibhutibhushan Bandopadhyay", "Kalidasa", "Saratchandra Chattopadhyay"], "Saratchandra Chattopadhyay"),
    new Question("Which of the following books is written by R.N. Tagore? ", ["Anand Math", "Chidambara", "Rakta Karabi", "Durgesh Nandini"], "Rakta Karabi"),

];

// create quiz
var quiz = new Quiz(questions);

// display quiz
details();