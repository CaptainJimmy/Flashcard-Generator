var fs = require('fs');

var Card = function(){
	fs.readFile("./card.txt","utf8",function(err, data){
	if (err) {console.log("Error"+ err)}
		else {JSON.parse(data)}
})
};

//var newCard = new Card();
var card = new Card();

//grab the card from the text file.
var BasicCard = function(){

	this.GetCard = function(president,modifier) {
			console.log("HERER FOO"+president+" "+modifier)
			console.log(card.president.modifier);

		}
	this.Cloze = function(president,modifier){
			console.log("HERER FOO"+president+" "+modifier)


//console.log("here"); console.log(card);
		 //return card.president.cloze.modifier;
		}
	}

module.exports = BasicCard;