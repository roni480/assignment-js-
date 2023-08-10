// ১. Variable কি ?

variable is a fundametntal concept in computer programming where we can storage location in a program's memory where you can store and manipulate data.
variable allow us to give a name to a value .

// ২. Variable কিভাবে লিখতে হয় ?

var age = 24;
var name ="john";// Note: I added quotes around "John" for consistency


// updating the variable 
age = 30;
console.log(age);




// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?

string type varibale is a variable that stores Data, such as words, sentences, or any 
sequence of CharacterData. 

var firstName = "john";
var lastName = "doe"
var fullName = firstName+""+ lastName;// concatination
console.log(fullName); //output: "john Doe"

var name = 'roni'; // using single quotes
var name = "Roni"; // using double quotes

var message = "Hello, ${name}!"; // string interpulation 

var greeting = new String("Hello"); // string constractor 
 
var message = 'Hello, ${name}!'; // string interpulation 
var greeting = new String ("Hello"); // string constuctor

var escapeString = "He said, \"Hello!\""; // escape sequence

var unicodeString = "\u0003 all right reserved ."; // unicode escape sequence


var fullName = "roni"+ ""+ "Doe"; // concatenation

var multiline = `
Line 1
Line 2
Line 3
`;
// using multiline 
var multiline = ` 
line 1
line2
line 3
`;

// using String.fromCharCode():

var charCodeString = String.fromCharCode(34, 101, 104, 11);
















// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?

//number type variable means that stores numerical data . It is essential 
//for mathmetical calculation .

var age = 20; // integer 

var temperature = 30.3; // floating poing literals;


var distance = 1.4e6;// 1.4 * 10^6 exponential notaion;

var result = 10+3; // using arithmetic operations

var total = price + tax; // variable for expression

var octalNumber = Oo124; //
var hexNUmber = Ox1A; 


var count = new Number (10); // using number constractor;

var result = 0/0; // NaN

var positiveInfinity = Infinity; // infinity 
var negativeInfinity = -Infinity; // - infinity



// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?

//used for  logical operations, conditions and decision-making,


var isAvailable = true;
var hasPermission = false;

// comparison operator 

var isGreater = 10>5; // true
var isLessOrEqual = 2<=2; //true

 varisLoggedIn = user !== null && user.isAuthenticated; // logical expression;

 var hasAccess = false;   // conditioal statements
 if(userRole =="admin"){
     hasAccess = true;
 } 


 var isValid = isValidInput(userInput);





// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 


var roni ="we need your help."
console.log(roni.toUppesCase());


var roni ="we can do this work"
console.log(roni.toLowerCase());

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?

//javascript has many types of operator but I don't know all of theem

Arithmetic Operators: These operators perform basic arithmetic calculations.

    + (Addition)
    - (Subtraction)
    * (Multiplication)
    / (Division)
    % (Modulus - Remainder of division)
    ** (Exponentiation)

Assignment Operators: These operators assign values to variables.

    = (Assignment)
    += (Addition assignment)
    -= (Subtraction assignment)
    *= (Multiplication assignment)
    /= (Division assignment)
    %= (Modulus assignment)
    **= (Exponentiation assignment)

Comparison Operators: These operators compare values and return boolean results.

    == (Equal)
    === (Strict equal)
    != (Not equal)
    !== (Strict not equal)
    > (Greater than)
    < (Less than)
    >= (Greater than or equal)
    <= (Less than or equal)




// ৮. Math.abs() এর ব্যাবহার লিখুন । 

var num = -10;
var absoluteValue = Math.abs(num);
console.log(absoluteValue); // output 10

var roni =30;
var absoluteValue = Math.abs(roni);
console.log(absoluteValue);



// ৯. Math.celi()  এর ব্যাবহার লিখুন । 

var num = 5.3;
var roundedUp = Math.ceil(num);
console.log(roundedUp); // Output 6;

var num = 8.9;
var roundUp =Math.ceil(num);
console.log(roundUp);// output: 9;



// ১০. Math.Floor() এর ব্যাবহার লিখুন । 

var num = 5.8;
var roundedDown =Math.floor(num);
console.log(roundedDown);// ouput 5


var num =8.2;
var roundedDown = Math.floor(num);
console.log(roundedDown);// output 8

// ১১. Math.round() এর ব্যাবহার লিখুন ।

var num1 = 5.3;
var rounded1 = Math.round(num1);
console.log(rounded1); // output 5

var num3 = 8.7;
var rounded3 =Math.round(num2);
console.log(rounded3)

var num3 = -3.4;
var rounded3 =Math(num3);
console.log(rounded3); 



// ১২. Math.random() এর ব্যাবহার লিখুন ।

var randomNumber = Math.random();
console.log(randomNumbr); //output ;

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max -min))+min;
}
 
var randomInt =getRandomInt(1,11);
console.log(randomInt);
// asignment.js - GitHub Link 
