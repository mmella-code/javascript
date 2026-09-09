function calculategrade(score){
    for(var i = 0; i < score.length; i++)
    if( score[i] >= 90 && score[i]<= 100){
        console.log('A');
    }
      else if(score[i] >= 80 && score[i] <= 89){
        console.log('B');
    }
     else if( score[i] >=70 && score[i] <= 79){
        console.log('C');
    }
     else if(score[i] >=60 && score[i] <= 69){
        console.log('D');
    }
    else{
        console.log('f');
    }

}
  var score = [50, 65, 79, 82, 98];
    calculategrade(score);
