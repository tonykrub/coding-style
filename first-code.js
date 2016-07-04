var age = 31; 
// having space around the equal (=) sign is good
// it makes the code more readable
// don't forget semicolon at the end of each statement

var name = "Tony";

var num = 10;


// Curly brackets
if (num > 0){
    console.log('the number is greater than zero');
    console.log('good job!');
}
// always have {} if you have one statement - if/else/for/while



if (num >0){ 
    // .. code goes here
}

if (num >0)
{
    // .. code goes here
}

//Function -- there are 3 versions below. 
//All these 3 different ways are not 100% equivalent. 
//try to use the first version.
// below is the 1st version
function doSomething(sentence){
    // ... code goes here
}

// below is the 2nd version
var doSomething = function(sentence){
    // ... code goes here
}



// below is the 3rd version
var doSomething = function doSomething(sentence){
    // ... code goes here
}


