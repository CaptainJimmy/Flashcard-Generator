var fs = require('fs');

var Card = fs.readFile("card.txt","utf8",function(err, data){
	if (err) {console.log("Error"+ err)}
		else {return data;}
});

var newCard = new Card();
var card=JSON.parse(newCard);

//grab the card from the text file.
var BasicCard = function(){
	this.GetCard = function(president,modifier) {
			console.log(card.president.modifier);
			return card.president.modifier;
		}
	this.Cloze = function(president,modifier){
		 return card.president.cloze.modifier;
		}
	}
