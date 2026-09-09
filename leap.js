function isleapyear(year){
    for(var i = 0; i < year.length; i++)
    if(year[i] % 4 === 0){
        console.log('leap year');
    }
    else if(year[i] % 100 !== 0){
        console.log('not a leap year');
    }
    else{
        console.log('not a valid year');
    }

}
var year =[2002,2012, 2028, 2006, 2005];
isleapyear(year);