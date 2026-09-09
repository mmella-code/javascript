function numbersArrays(numbers){
    for (var i = 0; i <=numbers.length; i++)

        if(numbers[i] % 2 === 0){
            console.log('even number')
        }
        else if(numbers[i] % 2 !== 0){
            console.log('odd number')
        }
        else{
            console.log('error')
        }
}
var numbers =[1,2,3,4,5,6,7,8,9,10]
numbersArrays(numbers)

