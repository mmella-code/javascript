function calculatearrays(numbers, operation){
    if(!numbers || numbers == 0){
        console.log('0');
        return;
    }
    let totalsum = 0;
for(const number of numbers){
     totalsum = totalsum + number;
}

if(operation == 'avg'){
    console.log( totalsum / numbers.length)
}
else{
    console.log(totalsum);
}

}

const total =[10, 20, 30, 40, 50];
console.log(calculatearrays(total, 'sum'))
console.log(calculatearrays(total, 'avg'))



    