// a switch statement is for when we have many possible consditions 

const pet = 'bird';

switch(pet) {
    case "dog": 
        console.log("woof");
        break;
    case "cat";
        console.log("meow");
        break;
    case "bird"
        console.log("chirp");
        break;
    default:
        console.log("cool pet, dude.")
}



const grade = 82;

switch(true) {
    case (grade >=90): 
        console.log("A");
        break;
    case (grade >=80):
        console.log("B");
        break;
    case (grade >=70): 
        console.log("C");
        break;
    case (grade >= 60): 
        console.log("D");
        break;
    default : 
        console.log("F");
}