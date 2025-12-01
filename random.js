//random password generator

function generatepassword(length, includeLowerCase, includeuppercase, includeNumbers, includesymbols){
    const lowercaseChars ="abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numberschars = "0123456789";
    const symbolschars = "!@#$%^&*()<>?|/'[]{}";

    let allowedchars = "";
    let password = "";

    allowedchars += includeLowerCase ? lowercaseChars: " ";
     allowedchars += includeuppercase ? uppercasechars: " ";
      allowedchars += includeNumbers ? Numberschars: " ";
       allowedchars += includesymbols ? symbolschars: " ";

       if(length < 0){
        return`(password length must be 1)`;
       }
       if(allowedchars.length === 0){
        return `(atleast one character needs to be selected)`;
       }

       for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex]; 
       }

    return password;
}

const passwordlength = 12;
const includeLowerCase = true;
const includeuppercase = true;
const includeNumbers = true;
const includesymbols = true;

const password = generatepassword(passwordlength, 
                 includeLowerCase, 
                 includeuppercase, 
                 includeNumbers, 
                 includesymbols);


console.log(`generated password: ${password}`);                 


                 