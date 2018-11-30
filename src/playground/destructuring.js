//********************** OBJECT DESTRUCTURING */
//****************************************** */
const person = {
    name: 'David',
    age: 46,
    location: {
        city: 'Lisbon',
        temp: 13
    }
};

//destructuring statement and default value for name
const { name: firstName = "Anonymous", age } = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstName} is ${age}.`);

//destructuring statement
/* const { city, temp } = person.location;
if (city && temp) {
    console.log(`It's ${temp} degrees in ${city}`)
}; */
//destructuring statement with renaming the items inside the object
const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} degrees in ${city}`)
};


/* 
if (person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} degrees in ${person.location.city}`)
} */


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher
console.log(publisherName)// Penguin, Self-Published


//********************** ARRAY DESTRUCTURING */
//****************************************** */


const address = ['1299 S Juniper Street', 'Philadelphia' , 'Pennsylvania', '19147'];


const [rua, cidade, estado, cpostal] = address;

//console.log(`Your are in ${address[1]}, ${address[2]}`)
console.log(`Your are in ${cidade}, ${estado}`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [coffeeName, , mediumPrice] = item

//console.log(`A medium Coffe (hot) costs $2.50`)
console.log(`A medium ${coffeeName} costs ${mediumPrice}`)