// Use prototypes to attach these methods, wherever possible.
// As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this.

const ClozeCard = require('./ClozeCard');
const BasicCard = require('./BasicCard');
const inquirer = require('inquirer');
const fs = require('fs');
const clozeArray = [];
const basicArray = [];
start();
// when typenode create.js
function start(){
    console.log('running start()')
    inquirer.prompt([
        {
            type: 'list',
            name: 'cardType',
            message:'What kind of cards would you like to create?',
            choices: ['Basic Card', 'Cloze Card']
        }
    ]).then(function(ans){
        if (ans.cardType === 'Basic Card'){
            createNewCard('basic.txt', basicArray, BasicCard, ans.cardType);
        }
        else if (ans.cardType === 'Cloze Card'){
            createNewCard('cloze.txt', clozeArray, ClozeCard, ans.cardType);
        }
    }); 
}

function createNewCard(file, cardArray, cardType, cardTypeText){ 
    console.log('running createNewCard()');
    inquirer.prompt([
        {
            name: 'key',
            message: 'What is the keyword for this card?'
        },{ 
            name: 'def',
            message: 'What is the definition for this keyword?'
        }
    ]).then(function(ans){
        const newCard = new cardType(ans.key, ans.def);
        cardArray.push(newCard);
        writeFile(file, JSON.stringify(cardArray));
        if (cardTypeText === 'Basic Card'){
            //console.log(newCard.choicesArray);
            cardAction(newCard, newCard.choicesArray);
        } else if (cardTypeText === 'Cloze Card'){
            cardAction(newCard, newCard.choicesArray);
        }
    });
}

function writeFile(file, objectArray){
    console.log('running writeFile()');
    fs.writeFile(file, objectArray, function(err){
        if (err) console.log(err);
    });
}

function cardAction(newCard, actionList){
    console.log('running cardAction()');
    console.log('actionList ' + actionList);
    let choiceList = function (){
        let actionArray = [];
        for (let i = 0; i < actionList.length; i++){
            console.log('running the for loop for choiceList');
            let action = actionList[i].text; 
            actionArray.push(action);
        }
        return actionArray;
    }
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'How would you like to see your card?',
            choices: choiceList
        }
    ]).then(function(ans){
        console.log('running cardAction(). inquirer');
        for (let i= 0; i < newCard.choicesArray.length; i++){
            if (newCard.choicesArray[i].text === ans.action){
                console.log('trying to run newCard.choicesArray[i].action()');
                newCard.choicesArray[i].action();
            }
        }
    });
}