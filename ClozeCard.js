var BasicCard = require("./BasicCard.js");



var ClozeCard = function(president, mod){
	this.president=president;
	this.mod=mod;
	 var newCard = new BasicCard(president,mod);
	newCard.Cloze();
}

module.exports = ClozeCard;
