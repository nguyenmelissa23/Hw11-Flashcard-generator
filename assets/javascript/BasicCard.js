// Create a BasicCard constructor. It should accept front and back arguments.

const BasicCard = function(front, back) {
    this.front = front; 
    this.back = back;
    this.countFront = front.split(' ');
    this.countBack = back.split(' ');
    this.choicesArray = [
        {
           action: function(){
               console.log('trying to run this.getFront.Text()');
               console.log(this);
               //this.getFrontText();
            },
           text:'Get Front Text'
        }, 
        {
            action: function(){
                this.getBackText();
            },
            text: 'Get BackText'
        }];

    this.getFrontText = function(){
        let placeHolder = this.addPlaceHolder(this.countBack);
    };

    this.getBackText = function(){
        let placeHolder = this.addPlaceHolder(this.countFront);
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

