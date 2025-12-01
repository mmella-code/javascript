const marks = 85;
let branch;
switch(true){
    case marks >=90:
    branch = "computer major"
    break;

     case marks >=80:
    branch = "mechanical major"
    break;

     case marks >=70:
    branch = "business major"
    break;

     case marks >=60:
    branch = "economics major"
    break;
    default:
        branch = "bio major"
}

console.log(`student branch ${branch}`);