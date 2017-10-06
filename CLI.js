var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var president = process.argv[2].toLowerCase();
var cardType = process.argv[3].toLowerCase();
var cardModifier = process.argv[4].toLowerCase();

// var myBasicCard = new BasicCard();
// var myClozeCard = new ClozeCard();

//console.log(BasicCard);
//console.log(myBasicCard);

if (cardType === "basic") {
	if (cardModifier === "front" || cardModifier ==="back"){
		console.log(cardType +" basic "+cardModifier);
		var myBasicCard = new BasicCard();
		myBasicCard.GetCard(president,cardModifier);
	}
	else {console.log("Requires front or back modifier")}
}
else if (cardType==="cloze") {
		if (cardModifier ==="partial" || cardModifier === "full") {
		    console.log(cardType +" cloze " + cardModifier);
		    var myClozeCard = new ClozeCard();
			myClozeCard(president,cardModifier);
		}
		else {console.log("Requires partial or full modifier")}
}
else {console.log("Syntax Error. Requires arguments.  Example: '$ node CLI.js basic front' or '$ node CLI.js cloze partial'")};

