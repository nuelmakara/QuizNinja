//Sets the questions in an array!
const quiz = [
	["What is Superman's real name?", "Clark Kent"],
	["What is Wonder Woman's real name?", "Diana Prince"],
	["What is Batman's real name?", "Bruce Wayne"]
	["What is the name of United State's 45th president?", "Donald Trump"]
	];
// sets score and initialize it!
let score = 0;
for(const [question, answer] of quiz.entries()){
	
	//Get response to questions from player
	const response = prompt(question);
	if(response === answer){
		alert("Correct!");
		//increment the score count by 1
		score++;
	} else {
		alert(`Wrong! The correct answer was ${answer}`);
	}
}
//At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);
