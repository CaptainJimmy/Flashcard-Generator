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

var card={ first: {
	front: "Who was the first president of the United States?",
	back: "George Washington",
	cloze: {
	         partial: "... was the first president of the United States.",
	         fulltext: "George Washington was the first president of the United States."
	         }
	},
second: {
	front: "Who was the second president of the United States?",
	back: "John Adams",
	cloze: {
	         partial: "... was the second president of the United States.",
	         fulltext: "John Adams was the second president of the United States."
	         }
	}
}	



var BasicCard = function(president,mod){
  this.president=president;
  this.mod=mod;
  console.log(card.president);
	this.GetCard = function() {


			console.log(president);
			console.log(mod);
			//console.log(card);
						//console.log(card.first.front);
 		
		//	console.log(card.president.mod);
		//	console.log(card.first.front);

		}
	this.Cloze = function(){
			//onsole.log("HERER FOO"+president+" "+modifier)
			console.log(card);

//console.log("here"); console.log(card);
		 //return card.president.cloze.modifier;
		}
	}

module.exports = BasicCard;