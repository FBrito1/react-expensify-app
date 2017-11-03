//OBJECT DESTRucturing


/* const person = {
    name: 'Fabio',
    age: '21',
    location: {
        city: 'Guarujá',
        temp: 93
    }
};

const {name = 'Anonymus', age} = person;

const {temp: temperature, city} = person.location;

console.log(`${name} is ${age} years old. `);

console.log(`It's ${temperature} in ${city}`);
 */

/*  const book = {
     title: 'Ego is the enemy',
     author: 'Ryan Holiday',
     publisher: {
         name: 'Penguin'
     }
 }

const { name: publisherName = 'Self-publisher' } = book.publisher;


 console.log(publisherName) */ //Penguin, Self-publisher


 //Array destructuring

/*  const address = ['1299 S JUniper Street', 'Philadelphoa', 'Pennylvania', '19147'];

const [street, city, state, zip] = address;

 console.log(`You are in ${city} ${state}`); */

 const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];


const [coffeHot, , medium] = item;

 console.log(`A medium ${coffeHot} costs ${medium}`);