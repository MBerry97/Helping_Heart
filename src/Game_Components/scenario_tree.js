//this.createDialog = (scene, x, y, scenarioText, zone, buttonText1, buttonText2, nextScenario1, nextScenario2, end)

const scenarioTree = {
	//Dialog with NPC in village, needs Netflix ideas, this.createDialog = (scene, x, y, scenarioText, zone, buttonText1, buttonText2, nextScenario1, nextScenario2, end)
	'startVillageNPC': function(zone) {this.createDialog(this, 2243.10344827586, 4050, 'Thank goodness I found you! I have a terrible problem', zone, 'Maybe I can help', 'Sucks to be you', 'askQuestionNetflix', null, false).setScrollFactor(0)},
	'askQuestionNetflix': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "I've run out of things to watch on Netflix. I've seen everything! ", zone, 'continue', '', 'continueNetflix', null, false).setScrollFactor(0)},
	'continueNetflix': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "It's so desperate I've had to go outside. Do you have any suggestions?", zone, 'Have you tried Disney plus?', 'Have you tried Tiger King?', 'disneyPlus', 'tigerKing', false).setScrollFactor(0)},
	'tigerKing': function(zone) {this.createDialog(this, 2243.10344827586, 4050, 'Of course I have! Urgh, some help you are', zone, 'continue', '', null, null, false).setScrollFactor(0)},
	'disneyPlus': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "Yeah, I'd love to watch the Mandalorian, but who has the money for that?", zone, 'What about a book?', 'Um, get a job then', 'book', null, false).setScrollFactor(0)},
	'book': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "I never thought of that! I enjoyed the Witcher, maybe I'll try the book. Thanks!", zone, 'continue', '', null, null, true).setScrollFactor(0)},
	
	//Dialog with NPC in wood, sad and needs someone to listen, this.createDialog = (scene, x, y, scenarioText, zone, buttonText1, buttonText2, nextScenario1, nextScenario2, end)
	'startWoodNPC': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "Hey...", zone, 'Are you okay?', "Hi! *keep walking*", 'askQuestionSad', null, false).setScrollFactor(0)},
	'askQuestionSad': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "I'm just feeling really down today", zone, 'Do you want to talk?', "Well I'm great! Seeya!", 'talkSad', null, false).setScrollFactor(0)},
	'talkSad': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "*Frank talks about his problems for 20 minutes*", zone, 'Tell me more', "Sorry, I've got to go", 'continueTalkSad', null, false).setScrollFactor(0)},
	'continueTalkSad': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "You're such a great listener. Do you have any advice for me?", zone, 'Frank, you know what to do', 'Always wear sunscreen', 'answerWithin', 'sunscreen', false).setScrollFactor(0)},
	'answerWithin': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "You're right! My heart knew the right path all along!", zone, 'continue', '', null, null, true).setScrollFactor(0)},
	'sunscreen': function(zone) {this.createDialog(this, 2243.10344827586, 4050, "Umm, okay. I'll go to the shops and buy some. *Frank leaves, confused*", zone, 'continue', '', null, null, false).setScrollFactor(0)},
	
	//Dialog with NPC in park, needs date ideas, this.createDialog = (scene, x, y, scenarioText, zone, buttonText1, buttonText2, nextScenario1, nextScenario2, end)
	'startParkNPC': function(zone) {this.createDialog(this, 2243.10344827586, 4050, 'Will you help me pick flowers?', zone, 'Yes', 'No', null, null, false).setScrollFactor(0)},
	
	//Dialog with NPC in supermarket, overwhelmed by choice of ketchup, this.createDialog = (scene, x, y, scenarioText, zone, buttonText1, buttonText2, nextScenario1, nextScenario2, end)	
	'startSupermarketNPC': function(zone) {this.createDialog(this, 2243.10344827586, 4050, 'Will you help me find the soup?', zone, 'Yes', 'No', null, null, false).setScrollFactor(0)},
	
	//Dialog with NPC in old forest, lonely and needs a chat, this.createDialog = (scene, x, y, scenarioText, zone, buttonText1, buttonText2, nextScenario1, nextScenario2, end)
	'startOldForestNPC': function(zone) {this.createDialog(this, 2243.10344827586, 4050, 'Will you help me chop some wood?', zone, 'Yes', 'No', null, null, false).setScrollFactor(0)},
	
	//Dialog with NPC in graveyard, needs a job, this.createDialog = (scene, x, y, scenarioText, zone, buttonText1, buttonText2, nextScenario1, nextScenario2, end)
	'startGraveyardNPC': function(zone) {this.createDialog(this, 2243.10344827586, 4050, 'Will you help me fight this ghost?', zone, 'Yes', 'No', null, null, false).setScrollFactor(0)},
  }

  export default scenarioTree;