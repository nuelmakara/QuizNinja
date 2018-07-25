alert("Welcome to Makara\'s Quiz Ninja");
const question = "What is Superman's real name?";
const answer = prompt(question);
alert("You answered "+ answer);
//Two variables were created question & answer
//question holds the quiz question the user is to provide and answer to.
//answer, the other variable fires a prompt with the embedded answer that the user chose!
const quiz = [
	["What is SUperman's real name?", "Clark Kent"],
	["What is Wonder Woman's real name?", "Diana Prince"],
	["What is Batman's real name?", "Bruce Wayne"]
	];
let score = 0; // initialize score

for(const [question, answer] of quiz){
	const response = prompt(question);
	if(response === answer){
		alert("Correct!");
		score++;
	} else {
		alert('Wrong! The correct answer was'+ answer);
	}
}
//At the end of the game, report the player's score
alert("Game Over, you scored "+score point+ (score !== 1) ? 's' : '');