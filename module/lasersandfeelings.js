
/*
@param {roll} r - A Roll object
@param {integer} num - An integer value found on the Lasers & Feelings character sheet in the number input
@param {integer} type - an integer value of 1 or 0; 1 indicates a Lasers roll, 0 indicates a Feelings roll
@returns {string} resultContent - the final string result of number of successes and any Laser-Feelings to be returned
*/
function evaluateRolls(r, num, type) {

    var array = r.terms[0].results;
    var successCount = 0;
    var laserFeelingsCount = 0;
    var resultContent = ``;

    array.forEach(element => {
        console.log(element.result);
        if((element.result >= num && type === 0) || (element.result <= num && type === 1)){
            console.log("success incremented");
            successCount = successCount + 1;
            if(element.result == num){
                console.log("laser feelings incremented");
                laserFeelingsCount = laserFeelingsCount + 1;
            }
        }
    });

    if(laserFeelingsCount > 0){
        resultContent = `
        <p class="roll success">${game.i18n.localize("SIMPLE.Successes")}: ${successCount}</p> 
        <p class="roll laserfeelings">Laser-Feelings: ${laserFeelingsCount}</p>
        `;
    }
    else{
        resultContent = `
        <p class="roll success">${game.i18n.localize("SIMPLE.Successes")}: ${successCount}</p> 
        `;
    }

    return resultContent;
}

/*
@param {String} characterName - The name of the character passed in as a string from actor-sheet.js
@param {Integer} skNum - The skill number passed in from actor-sheet.js
*/
function lasersRoll(characterName){

    let dialogTemplate = `Lasers Roll`;
    let thisActor = game.actors.getName(characterName);
    let num = thisActor.data.data.theOnlyStat;
    new Dialog({
        title: `Lasers Roll`, 
        content: dialogTemplate,
        buttons: {
          normal: {
            label: "Normal", 
            callback: (html) => {
              let newRollString = `1d6`;
              let roll = new Roll(newRollString).roll();
              let chatTemplate = evaluateRolls(roll, num, 1);
              roll.toMessage({
                rollMode: 'roll',
                speaker: {alias: characterName}
              })
              ChatMessage.create({
                content: chatTemplate,
                roll: roll,
                speaker: {alias: characterName}
              })      
            }//end callback for normal
          }, 
            prepared: {
                label: "Prepared", 
                callback: (html) => {
                let newRollString = `2d6`;
                let roll = new Roll(newRollString).roll();
                let chatTemplate = evaluateRolls(roll, num, 1);
                roll.toMessage({
                    rollMode: 'roll',
                    speaker: {alias: characterName}
                  })
                ChatMessage.create({
                    content: chatTemplate,
                    roll: roll,
                    speaker: {alias: characterName}
                })      
            }//end callback for prepared
        },
        expert: {
            label: "Expert", 
            callback: (html) => {
              let newRollString = `3d6`;
              let roll = new Roll(newRollString).roll();
              let chatTemplate = evaluateRolls(roll, num, 1);
              roll.toMessage({
                rollMode: 'roll',
                speaker: {alias: characterName}
              })
              ChatMessage.create({
                content: chatTemplate,
                roll: roll,
                speaker: {alias: characterName}
              })      
            }//end callback for expert
        },
          close: {
            label: "Close"
          }
        }
      }).render(true)  
  
  }//end lasersRoll function

  /*
@param {String} characterName - The name of the character passed in as a string from actor-sheet.js
@param {Integer} skNum - The skill number passed in from actor-sheet.js
*/
function feelingsRoll(characterName){

    let dialogTemplate = `Feelings Roll`;
    let thisActor = game.actors.getName(characterName);
    let num = thisActor.data.data.theOnlyStat;
    new Dialog({
        title: `Feelings Roll`, 
        content: dialogTemplate,
        buttons: {
          normal: {
            label: "Normal", 
            callback: (html) => {
              let newRollString = `1d6`;
              let roll = new Roll(newRollString).roll();
              let chatTemplate = evaluateRolls(roll, num, 0);
              roll.toMessage({
                rollMode: 'roll',
                speaker: {alias: characterName}
              })
              ChatMessage.create({
                content: chatTemplate,
                roll: roll,
                speaker: {alias: characterName}
              })      
            }//end callback for normal
          }, 
            prepared: {
                label: "Prepared", 
                callback: (html) => {
                let newRollString = `2d6`;
                let roll = new Roll(newRollString).roll();
                let chatTemplate = evaluateRolls(roll, num, 0);
                roll.toMessage({
                    rollMode: 'roll',
                    speaker: {alias: characterName}
                  })
                ChatMessage.create({
                    content: chatTemplate,
                    roll: roll,
                    speaker: {alias: characterName}
                })      
            }//end callback for prepared
        },
        expert: {
            label: "Expert", 
            callback: (html) => {
              let newRollString = `3d6`;
              let roll = new Roll(newRollString).roll();
              let chatTemplate = evaluateRolls(roll, num, 0);
              roll.toMessage({
                rollMode: 'roll',
                speaker: {alias: characterName}
              })
              ChatMessage.create({
                content: chatTemplate,
                roll: roll,
                speaker: {alias: characterName}
              })      
            }//end callback for expert
        },
          close: {
            label: "Close"
          }
        }
      }).render(true)   
  }//end feelingsroll function

export {lasersRoll, feelingsRoll};