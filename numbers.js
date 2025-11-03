//numbers geussing game

const minNum = 2;
const maxNum = 200;
const answer = Math.floor (Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let geuss;
let running =true;

while(running){
    geuss = window.prompt(`geuss a number between ${minNum} - ${maxNum}`);
    geuss = Number(geuss);
   
    if(isNaN(geuss)) {
        window.alert(`please enter a valid number`);
    }
    else if(geuss < minNum || geuss > maxNum){
        window.alert(`please enter a valid digit`)
    }
    else{
        attempts++;
        if(geuss < answer){
            window.alert(`too low try again`);
        }
        else if(geuss > answer){
            window.alert(`too high try again`);
        } 
        else{
            window.alert(`correct the answer was ${answer}, you did it in ${attempts} attempts`);
            running = false;
        }
    }
    
}