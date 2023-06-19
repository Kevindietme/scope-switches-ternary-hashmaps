// Scope refers to where  a variable (or funciton) is available 

// With "export" we can make variables and functions available to other modules
// Let's focus on what's happeninig inside a single module.
// We can define a variable (or function) globally, which means it is available anywhere inside the module. 


const firstName = "Ariana"; //this is now global 
        
const lastName = "Diaz";

if(lastName === "Diaz") {
    const message = "Good Morning!" //This variable is only available inside this if statement 
}

console.log(message); // Throws error because message is not in scope


let greeting;

if(firstName === "Ariana") {
    greeting = "Hello Ariana."
}

console.log(greeting);

const pet = "dog";

let petSound;

if(pet === "dog") {
    petSound = "woof";
} else {
    petSound = "meow";
}

