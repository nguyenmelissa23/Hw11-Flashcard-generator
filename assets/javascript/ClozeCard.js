// Create a ClozeCard constructor. It should accept text and cloze arguments.
// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.

const ClozeCard = function(keyword, definition) {
    //properties
    this.keyword = keyword;
    this.definition = definition;
    this.countKey = keyword.split(' ');
    this.countDef = definition.split(' ');
    const self = this;
    this.choicesArray = [
        {
           action: function(){
               self.getKeyword();
            },
           text:'Get Cloze Part'
        }, 
        {
            action: function(){
                self.getPartialText();
            },
            text: 'Get Partial Text'
        },
        {
            action: function(){
                self.getFullText();
            },
            text: 'Get Full Text'
        }
    ];
    //method
    this.getKeyword = function() {
        let placeHolder = this.addPlaceHolder(this.countDef);
        console.log(this.keyword + placeHolder);
    };

    this.getPartialText = function() {
        let placeHolder = this.addPlaceHolder(this.countKey);
        console.log(placeHolder + ' ' + this.definition);
    };
    
    this.getFullText = function(){
        console.log(this.keyword + " " + definition);
    };

    this.addPlaceHolder = function(text){
        let placeHolder = '';
        for (let i = 0 ; i < text.length; i++){
            placeHolder += ' ____'; 
        }
        return placeHolder;
    };
};

module.exports = ClozeCard; 
