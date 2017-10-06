var BasicCard = require("./BasicCard");

var newCard = new BasicCard();

var ClozeCard = function(president,modifier){
	console.log("ClozeCard " + president + modifier);
	return newCard.Cloze(president,modifier);
}

