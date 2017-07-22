"use strict"


function rollDice4And6Easy(){
	var die1 = Math.floor(Math.random() * 4 + 1);
	var die2 = Math.floor(Math.random() * 6 + 1);
	console.log("die1", die1);
	console.log("die2", die2);
	var correctAnswerPlusOne = getTotalFromDie1And2(die1, die2);
	return correctAnswerPlusOne;
}
function getTotalFromDie1And2(firstDie, secondDie){ //passing the info from the getTotalFromDie1And2 passing to the function getTotalFromDie1And2
    var correctAnswer = firstDie + secondDie;
    console.log("correctAnswer", correctAnswer);
    var totalAnswer1And2 = prompt("Enter your answer for:" + firstDie + "+" + secondDie);
    console.log(totalAnswer1And2);
    var correctAnswerPlusOne = 0;
    if (correctAnswer == totalAnswer1And2) {
    	console.log("Correct");
    	window.alert("Awesome!");
    	correctAnswerPlusOne += 1;
    }
    else {
    	console.log("Incorrect");
    	window.alert("Sorry, Try Again!");
    }
    return correctAnswerPlusOne;
}

function runEasySection(){
	var numberOfCorrectAnswers = 0;
	while(numberOfCorrectAnswers <= 2){
		var correctAnswerPlusOne = rollDice4And6Easy();
		numberOfCorrectAnswers += correctAnswerPlusOne;
	}
	runIntermediateSection();
}

function rollDice8And10Intermediate(){
	var die3 = Math.floor(Math.random() * 8 + 1);
	var die4 = Math.floor(Math.random() * 10 + 1);
	console.log("die3", die3);
	console.log("die4", die4);
	var correctAnswerPlusOne1 = getTotalFromDie3And4(die3, die4);
	return correctAnswerPlusOne1;
}
function getTotalFromDie3And4(thirdDie, fourthDie){
	var correctAnswer3And4 = thirdDie + fourthDie;
	console.log("correctAnswer3And4", correctAnswer3And4);
	var totalAnswer3And4 = prompt("Enter your answer for:" + thirdDie + "+" + fourthDie);
	console.log(totalAnswer3And4);
	var correctAnswerPlusOne1 = 0
	if(correctAnswer3And4 == totalAnswer3And4){
		console.log("Correct");
		window.alert("Awesome!");
		correctAnswerPlusOne1 += 1;
	}
	else{
		console.log("Incorrect");
		window.alert("Sorry, Try Again!");
	}
	return correctAnswerPlusOne1;
}
function runIntermediateSection(){
	var numberOfCorrectAnswers1 = 0;
	while(numberOfCorrectAnswers1 <= 2){
		var correctAnswerPlusOne1 = rollDice8And10Intermediate();
		numberOfCorrectAnswers1 += correctAnswerPlusOne1;
	}
	runAdvancedSection();
}

function rollDice12And20Advanced(){
	var die5 = Math.floor(Math.random() * 12 + 1);
	var die6 = Math.floor(Math.random() * 20 + 1);
	console.log("die5", die5);
	console.log("die6", die6);
	var correctAnswerPlusOne2 = getTotalFromDie5And6(die5, die6);
	return correctAnswerPlusOne2;
}
function getTotalFromDie5And6(fifthDie, sixthDie){
	var correctAnswer5And6 = fifthDie + sixthDie;
	console.log("correctAnswer5And6", correctAnswer5And6);
	var totalAnswer5And6 = prompt("Enter your answer for:" + fifthDie + "+" + sixthDie);
	console.log(totalAnswer5And6);
	var correctAnswerPlusOne2 = 0
	if(correctAnswer5And6 == totalAnswer5And6){
		console.log("Correct");
		window.alert("Great Job!!!!");
		correctAnswerPlusOne2 += 1;
	}
	else{
		console.log("Incorrect");
		window.alert("Sorry, Try Again!");
	}
	return correctAnswerPlusOne2;
}
function runAdvancedSection(){
	var numberOfCorrectAnswers2 = 0;
	while(numberOfCorrectAnswers2 <= 2){
		var correctAnswerPlusOne2 = rollDice12And20Advanced();
		numberOfCorrectAnswers2 += correctAnswerPlusOne2;
	}
	window.alert("CONGRATULATIONS!!!!!")
	return;
}

function rollDiceSubtractionEasy(){
	var die1 = 0
	var die2 = 1
	while(die1 - die2  < 0){
	die1 = Math.floor(Math.random() * 4 + 1);
	die2 = Math.floor(Math.random() * 6 + 1);
}
	console.log("die1", die1);
	console.log("die2", die2);
	var correctAnswerPlusOne3 = getTotalFromSubrtractionDie(die1, die2);
	return correctAnswerPlusOne3;
}
function getTotalFromSubrtractionDie(firstDie, secondDie){  
    var correctAnswer3 = firstDie - secondDie;
    console.log("correctAnswer3", correctAnswer3);
    var totalAnswer3 = prompt("Enter your answer for:" + firstDie + "-" + secondDie);
    console.log(totalAnswer3);
    var correctAnswerPlusOne3 = 0;
    if (correctAnswer3 == totalAnswer3) {
    	console.log("Correct");
    	window.alert("Awesome!");
    	correctAnswerPlusOne3 += 1;
    }
    else {
    	console.log("Incorrect");
    	window.alert("Sorry, Try Again!");
    }
    return correctAnswerPlusOne3;
}

function runEasySubtraction(){
	var numberOfCorrectAnswers3 = 0;
	while(numberOfCorrectAnswers3 <= 2){
		var correctAnswerPlusOne3 = rollDiceSubtractionEasy();
		numberOfCorrectAnswers3 += correctAnswerPlusOne3;
	}
	runIntermediateSubtraction();
}

function rollDiceSubtractionIntermediate(){
	var die3 = 0
	var die4 = 1
	while(die3 - die4  < 0){
	die3 = Math.floor(Math.random() * 8 + 1);
	die4 = Math.floor(Math.random() * 10 + 1);
}
	console.log("die3", die3);
	console.log("die4", die4);
	var correctAnswerPlusOne4 = getTotalFromSubrtractionDie1(die3, die4);
	return correctAnswerPlusOne4;
}
function getTotalFromSubrtractionDie1(thirdDie, fourthDie){
	var correctAnswer4 = thirdDie - fourthDie;
	console.log("correctAnswer4", correctAnswer4);
	var totalAnswer4 = prompt("Enter your answer for:" + thirdDie + "-" + fourthDie);
	console.log(totalAnswer4);
	var correctAnswerPlusOne4 = 0
	if(correctAnswer4 == totalAnswer4){
		console.log("Correct");
		window.alert("Awesome!");
		correctAnswerPlusOne4 += 1;
	}
	else{
		console.log("Incorrect");
		window.alert("Sorry, Try Again!");
	}
	return correctAnswerPlusOne4;
}
function runIntermediateSubtraction(){
	var numberOfCorrectAnswers4 = 0;
	while(numberOfCorrectAnswers4 <= 2){
		var correctAnswerPlusOne4 = rollDiceSubtractionIntermediate();
		numberOfCorrectAnswers4 += correctAnswerPlusOne4;
	}
	runAdvancedSubtraction();
}

function rollDiceSubtractionAdvanced(){
	var die5 = 0
	var die6 = 1
     while(die5 - die6  < 0){
	var die5 = Math.floor(Math.random() * 12 + 1);
	var die6 = Math.floor(Math.random() * 20 + 1);
}
	console.log("die5", die5);
	console.log("die6", die6);
	var correctAnswerPlusOne5 = getTotalSubtractionDie2(die5, die6);
	return correctAnswerPlusOne5;
}
function getTotalSubtractionDie2(fifthDie, sixthDie){
	var correctAnswer5 = fifthDie - sixthDie;
	console.log("correctAnswer5", correctAnswer5);
	var totalAnswer5 = prompt("Enter your answer for:" + fifthDie + "-" + sixthDie);
	console.log(totalAnswer5);
	var correctAnswerPlusOne5 = 0
	if(correctAnswer5 == totalAnswer5){
		console.log("Correct");
		window.alert("Great Job!!!!");
		correctAnswerPlusOne5 += 1;
	}
	else{
		console.log("Incorrect");
		window.alert("Sorry, Try Again!");
	}
	return correctAnswerPlusOne5;
}
function runAdvancedSubtraction(){
	var numberOfCorrectAnswers5 = 0;
	while(numberOfCorrectAnswers5 <= 2){
		var correctAnswerPlusOne5 = rollDiceSubtractionAdvanced();
		numberOfCorrectAnswers5 += correctAnswerPlusOne5;
	}
	window.alert("CONGRATULATIONS!!!!!")
	return;
}
function rollDiceMultiplicationEasy(){
	var die1 = Math.floor(Math.random() * 4 + 1);
	var die2 = Math.floor(Math.random() * 6 + 1);
	console.log("die1", die1);
	console.log("die2", die2);
	var correctAnswerPlusOne6 = getTotalFromMultiplicationDie(die1, die2);
	return correctAnswerPlusOne6;
}
function getTotalFromMultiplicationDie(firstDie, secondDie){  
    var correctAnswer6 = firstDie * secondDie;
    console.log("correctAnswer6", correctAnswer6);
    var totalAnswer6 = prompt("Enter your answer for:" + firstDie + "*" + secondDie);
    console.log(totalAnswer6);
    var correctAnswerPlusOne6 = 0;
    if (correctAnswer6 == totalAnswer6) {
    	console.log("Correct");
    	window.alert("Awesome!");
    	correctAnswerPlusOne6 += 1;
    }
    else {
    	console.log("Incorrect");
    	window.alert("Sorry, Try Again!");
    }
    return correctAnswerPlusOne6;
}

function runEasyMultiplication(){
	var numberOfCorrectAnswers6 = 0;
	while(numberOfCorrectAnswers6 <= 2){
		var correctAnswerPlusOne6 = rollDiceMultiplicationEasy();
		numberOfCorrectAnswers6 += correctAnswerPlusOne6;
	}
	runIntermediateMultiplication();
}

function rollDiceMultiplicationIntermediate(){
	var die3 = Math.floor(Math.random() * 8 + 1);
	var die4 = Math.floor(Math.random() * 10 + 1);
	console.log("die3", die3);
	console.log("die4", die4);
	var correctAnswerPlusOne7 = getTotalFromMultiplicationDie1(die3, die4);
	return correctAnswerPlusOne7;
}
function getTotalFromMultiplicationDie1(thirdDie, fourthDie){
	var correctAnswer7 = thirdDie * fourthDie;
	console.log("correctAnswer7", correctAnswer7);
	var totalAnswer7 = prompt("Enter your answer for:" + thirdDie + "*" + fourthDie);
	console.log(totalAnswer7);
	var correctAnswerPlusOne7 = 0
	if(correctAnswer7 == totalAnswer7){
		console.log("Correct");
		window.alert("Awesome!");
		correctAnswerPlusOne7 += 1;
	}
	else{
		console.log("Incorrect");
		window.alert("Sorry, Try Again!");
	}
	return correctAnswerPlusOne7;
}
function runIntermediateMultiplication(){
	var numberOfCorrectAnswers7 = 0;
	while(numberOfCorrectAnswers7 <= 2){
		var correctAnswerPlusOne7= rollDiceMultiplicationIntermediate();
		numberOfCorrectAnswers7 += correctAnswerPlusOne7;
	}
	runAdvancedMultiplication();
}

function rollDiceMultiplicationAdvanced(){
	var die5 = Math.floor(Math.random() * 12 + 1);
	var die6 = Math.floor(Math.random() * 20 + 1);
	console.log("die5", die5);
	console.log("die6", die6);
	var correctAnswerPlusOne8 = getTotalMulitplicationDie2(die5, die6);
	return correctAnswerPlusOne8;
}
function getTotalMulitplicationDie2(fifthDie, sixthDie){
	var correctAnswer8 = fifthDie * sixthDie;
	console.log("correctAnswer8", correctAnswer8);
	var totalAnswer8 = prompt("Enter your answer for:" + fifthDie + "*" + sixthDie);
	console.log(totalAnswer8);
	var correctAnswerPlusOne8 = 0
	if(correctAnswer8 == totalAnswer8){
		console.log("Correct");
		window.alert("Great Job!!!!");
		correctAnswerPlusOne8 += 1;
	}
	else{
		console.log("Incorrect");
		window.alert("Sorry, Try Again!");
	}
	return correctAnswerPlusOne8;
}
function runAdvancedMultiplication(){
	var numberOfCorrectAnswers8 = 0;
	while(numberOfCorrectAnswers8 <= 2){
		var correctAnswerPlusOne8 = rollDiceMultiplicationAdvanced();
		numberOfCorrectAnswers8 += correctAnswerPlusOne8;
	}
	window.alert("CONGRATULATIONS!!!!!")
	return;
}


function rollDiceDivisionEasy(){
	var die1 = Math.floor(Math.random() * 4 + 1);
	var die2 = Math.floor(Math.random() * 6 + 1);
	console.log("die1", die1);
	console.log("die2", die2);
	var correctAnswerPlusOne9 = getTotalFromDivisionDie(die1, die2);
	return correctAnswerPlusOne9;
}
function getTotalFromDivisionDie(firstDie, secondDie){  
    var correctAnswer9 = firstDie / secondDie;
    console.log("correctAnswer9", correctAnswer9);
    var totalAnswer9 = prompt("Enter your answer for:" + firstDie + "/" + secondDie);
    console.log(totalAnswer9);
    var correctAnswerPlusOne9 = 0;
    if (correctAnswer9 == totalAnswer) {
    	console.log("Correct");
    	window.alert("Awesome!");
    	correctAnswerPlusOne9 += 1;
    }
    else {
    	console.log("Incorrect");
    	window.alert("Sorry, Try Again!");
    }
    return correctAnswerPlusOne9;
}

function runEasyDivision(){
	var numberOfCorrectAnswers9 = 0;
	while(numberOfCorrectAnswers9 <= 2){
		var correctAnswerPlusOne9 = rollDiceDivisionEasy();
		numberOfCorrectAnswers9 += correctAnswerPlusOne9;
	}
	runIntermediateDivision();
}

function rollDiceDivisionIntermediate(){
	var die3 = Math.floor(Math.random() * 8 + 1);
	var die4 = Math.floor(Math.random() * 10 + 1);
	console.log("die3", die3);
	console.log("die4", die4);
	var correctAnswerPlusOne10 = getTotalFromDivisionDie1(die3, die4);
	return correctAnswerPlusOne10;
}
function getTotalFromDivisionDie1(thirdDie, fourthDie){
	var correctAnswer10 = thirdDie / fourthDie;
	console.log("correctAnswer10", correctAnswer10);
	var totalAnswer10 = prompt("Enter your answer for:" + thirdDie + "/" + fourthDie);
	console.log(totalAnswer10);
	var correctAnswerPlusOne10 = 0
	if(correctAnswer10 == totalAnswer10){
		console.log("Correct");
		window.alert("Awesome!");
		correctAnswerPlusOne10 += 1;
	}
	else{
		console.log("Incorrect");
		window.alert("Sorry, Try Again!");
	}
	return correctAnswerPlusOne10;
}
function runIntermediateDivision(){
	var numberOfCorrectAnswers10 = 0;
	while(numberOfCorrectAnswers10 <= 2){
		var correctAnswerPlusOne10= rollDiceDivisionIntermediate();
		numberOfCorrectAnswers10 += correctAnswerPlusOne10;
	}
	runAdvancedDivision();
}

function rollDiceDivisionAdvanced(){
	var die5 = Math.floor(Math.random() * 12 + 1);
	var die6 = Math.floor(Math.random() * 20 + 1);
	console.log("die5", die5);
	console.log("die6", die6);
	var correctAnswerPlusOne11 = getTotalDivisionDie2(die5, die6);
	return correctAnswerPlusOne11;
}
function getTotalDivisionDie2(fifthDie, sixthDie){
	var correctAnswer11 = fifthDie / sixthDie;
	console.log("correctAnswer8", correctAnswer8);
	var totalAnswer11 = prompt("Enter your answer for:" + fifthDie + "/" + sixthDie);
	console.log(totalAnswer11);
	var correctAnswerPlusOne11 = 0
	if(correctAnswer11 == totalAnswer11){
		console.log("Correct");
		window.alert("Great Job!!!!");
		correctAnswerPlusOne11 += 1;
	}
	else{
		console.log("Incorrect");
		window.alert("Sorry, Try Again!");
	}
	return correctAnswerPlusOne11;
}
function runAdvancedDivision(){
	var numberOfCorrectAnswers11 = 0;
	while(numberOfCorrectAnswers11 <= 2){
		var correctAnswerPlusOne11 = rollDiceDivisionAdvanced();
		numberOfCorrectAnswers11 += correctAnswerPlusOne11;
	}
	window.alert("CONGRATULATIONS!!!!!")
	return;
}

///hit button to start the dice roll.
//need to enter the sum of all multiples 
//if double digits, then double points  
// rules
//2 die with 4 sides, 6 sides, 8 sides, 10 sides, 12 sides, 20 sides
//user will roll die and with 4 side die and 6 side die,  when user gets 3 correct answers they will move to harder problems
//for example: 6 side die and 8 side die, 8 side die and 10 side die, 10 side die and 12 side die, 12 side die and 20 side die
//after the user rolls they should add the total of the outcome of the 2 die and enter it into the prompt
//if you roll a double your points double.
//if incorrect no points added
