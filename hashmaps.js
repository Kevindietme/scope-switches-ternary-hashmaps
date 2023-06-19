// more efficient than if's or switches
// we can use an object called a hash map for multiple conditions 

const petSounds = {
    "dog": "woof",
    "cat": "meow",
    "bird": "chirp",
    "snake": "hiss",
    "cow": "moo",
}

const pet = "bird";

console.log(petSounds[pet];)

// Example: 

const produce = {
    "apple" : { price: 0.99, color: "red", sku: "4056" },
    "orange" : { price: 0.79, color: "orange", sku: "3122" },
    "onion" : { price: 0.69, color: "yellow", sku: "7163" },
}

const product = "orange"
// const price = produce[product].price
const {price, color, sku} = produce[product] 
console.log(`${product} is ${color} and costs $${price}.`)

