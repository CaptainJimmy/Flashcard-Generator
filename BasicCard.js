var fs = require('fs');

// var Card = function(){
// 	fs.readFile("./card.txt","utf8",function(err, data){
// 	if (err) {console.log("Error"+ err)}
// 		else {JSON.parse(data)}
// })
// };

//var newCard = new Card();
//var card = new Card();

//grab the card from the text file.

var card={
"first": {
	"front": "Who was the first president of the United States?",
	"back": "George Washington",
	"cloze": {
	         "partial": "... was the first president of the United States.",
	         "fullText": "George Washington was the first president of the United States."
	         }
	},
"second": {
	"front": "Who was the second president of the United States?",
	"back": "John Adams",
	"cloze": {
	         "partial": "... was the second president of the United States.",
	         "fullText": "John Adams was the second president of the United States."
	         }
	}
	
}		


var BasicCard = function(president,modifier){
		var pres=this.president;
			var mod=this.modifier;
	this.GetCard = function(president,modifier) {
		var pres=this.president;
			var mod=this.modifier;
			console.log(pres);
			console.log(mod);
			//console.log("HERER FOO"+president+" "+modifier)
			console.log(card);

		}
	this.Cloze = function(president,modifier){
			//onsole.log("HERER FOO"+president+" "+modifier)
			console.log(card);

//console.log("here"); console.log(card);
		 //return card.president.cloze.modifier;
		}
	}

module.exports = BasicCard;