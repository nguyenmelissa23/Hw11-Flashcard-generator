// Create a BasicCard constructor. It should accept front and back arguments.

const BasicCard = function(front, back) {
    this.front = front; 
    this.back = back;
    this.countFront = front.split(' ');
    this.countBack = back.split(' ');
    const self = this;
    this.choicesArray = [
        {
           action: function(){
               self.getFrontText();
            },
           text:'Get Front Text'
        }, 
        {
            action: function(){
                self.getBackText();
            },
            text: 'Get BackText'
        }];

    this.getFrontText = function(){
        let placeHolder = this.addPlaceHolder(this.countBack);
        console.log(this.front);
    };

    this.getBackText = function(){
        let placeHolder = this.addPlaceHolder(this.countFront);
        console.log(this.back);
    };

    this.addPlaceHolder = function(text){
        let placeHolder = '';
        for (let i = 0 ; i < text.length; i++){
            placeHolder += ' ____'; 
        }
        console.log(placeHolder);
        return placeHolder;
    };
};

module.exports = BasicCard; 

