
/*
@param {roll} r - A Roll object
@param {integer} num - An integer value found on the Lasers & Feelings character sheet in the number input
@param {integer} type - an integer value of 1 or 0; 1 indicates a Lasers roll, 0 indicates a Feelings roll
@returns {string} resultContent - the final string result of number of successes and any Laser-Feelings to be passed back to actor-sheet.js
*/
function evaluateRolls(r, num, type) {

    var array = r._dice[0].rolls;
    var successCount = 0;
    var laserFeelingsCount = 0;
    var resultContent = game.i18n.localize("SIMPLE.Successes") + ": ";
    console.log(array);

    array.forEach(element => {
        if((element.roll >= parseInt(num) && type === 0) || (element.roll <= parseInt(num) && type === 1)){
            successCount = successCount + 1;

            if(element.roll==parseInt(num)){
                laserFeelingsCount=laserFeelingsCount+1;
            }

        }
    });

    resultContent = resultContent + successCount;

    if(laserFeelingsCount > 0){
        resultContent = resultContent + " & Laser-Feelings: " + laserFeelingsCount;
    }

    return resultContent;
}

export {evaluateRolls};