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

var card= {first: {
	front: "Who was the first president of the United States?",
	back: "George Washington",
	cloze: {
	         partial: "... was the first president of the United States.",
	         full: "George Washington was the first president of the United States."
	         }
	},
second: {
	front: "Who was the second president of the United States?",
	back: "John Adams",
	cloze: {
	         partial: "... was the second president of the United States.",
	         full: "John Adams was the second president of the United States."
	         }
	}
};



var BasicCard = function(president,mod){
  this.president=president;
  this.mod=mod;


	this.GetCard = function() {

			console.log(card.president);

		}
	this.Cloze = function(){
	//	console.log(this.mod);
	//	console.log(this.president);
		//	console.log("getting to this cloze");
			console.log(card[president].cloze[mod]);

		};
	}

module.exports = BasicCard;
