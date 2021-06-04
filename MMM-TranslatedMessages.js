/* Magic Mirror Module: MMM-TranslatedMessages
 * v1.0 - June 2021
 *
 * By Ahmed Abdelfattah <ahmedwal@my.yorku.ca>
 */

Module.register("MMM-TranslatedMessages",{

	

	// Module config defaults.
	defaults: {
		intervalTime: 5, 
		fade: 3, 
		Messages:[
			"Hello World","What is up" , "How is it going", "Sample Message"
		],
		targetLanguages:["en","fr","ar"],	 //Target Language Ex: fr for French
		fontSize: "1.1em" //Font Size of the text		
		
	},

	getStyles: function () {
        return ["MMM-TranslatedMessages.css"];
    },
	getScripts: function() {
        return ["https://cdn.jsdelivr.net/npm/translate@1/translate.min.js"];
    },


	// The starting Sequence for the module
	start: function() {
		Log.info("Starting module: " + this.name);

		this.count = 0;
		this.length = 0;
		this.translated = 0;

		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fade * 1000);
		}, this.config.intervalTime * 1000);
	},

	

	/* translateFunc()
	 * Retrieves a string message
	 *
	 * returns string translation 
	 */
			
	translateFunc: async function(text) {

		translate.engine = "google";
		translate.key = this.config.API_KEY;
		var i;
		var objLanguages = this.config.targetLanguages;
		var objLanguagesLength = objLanguages.length;
		this.objLanguagesMessages="";
		for (i=0;i<objLanguagesLength;i++){
			const translatedText = await translate(text, objLanguages[i]);
			this.objLanguagesMessages += translatedText;
		}
		return this.objLanguagesMessages;
		
	},

	

	/* retrieveMessages()
	 * Retrieves all the message values and calls the translation function
	 *
	 * returns Array of translated values 
	 */
	retrieveMessages:async function(){
		
		var objMessages = this.config.Messages;
		var toBeTranslated= "";

		var i;
		for (i = 0; i < objMessages.length; i++) { 
			toBeTranslated+=	objMessages[i]+"|";
		}
		toBeTranslated= await this.translateFunc(toBeTranslated);
		toBeTranslated= toBeTranslated.slice(0, -1)
		
		const returnedItems =toBeTranslated.split("|");
		this.length = returnedItems.length;
		
		return  returnedItems;
	},

	/* getMessage()
	 * Retrieves an array of messages and iterates through them
	 *
	 * Only Calls retrieveMessages() once so we do not make many requests for the translation API
	 * 
	 * returns String of individual message
	 */
	getMessage: async function(){

		if (this.translated==0){
			this.translated=1;
			this.translatedMessages = await this.retrieveMessages()
			return this.translatedMessages[this.count];
		}
		
		
		return this.translatedMessages[this.count];
	},


	

	
	
	// Overriding Dom Generator
	getDom:async function() {
		
		
		var Result = document.createElement("div");
		Result.className="translatedText";
		Result.style.fontSize=this.config.fontSize;
		Result.innerHTML = await this.getMessage();
		
		this.count= (this.count+1)%this.length;
		

		return Result;
	},

	

});
