import {AppState} from "./AppState.js"

console.log("controller loaded");
console.log(AppState);

function _drawRacers(){
    let racers = AppState.racers
    let template =''
    racers.forEach(racer => template += racer.Template);
    document.getElementById('racers').innerHTML = template
}
_drawRacers()

//Example
  //Input: "What's the longest word in this sentence"
  //Output: "sentence"

