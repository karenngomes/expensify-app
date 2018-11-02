//
// Object destructuring
//

const person = {
  age: 19,
  location: {
    city: "Maceió",
    temp: 32
  }
};

const { name: firstName = "Anonymous", age } = person;

console.log(`${firstName} is ${age} old`);

const { city: cityPerson, temp: temperature } = person.location;

if (temperature && cityPerson)
  console.log(`It's ${temperature} in ${cityPerson}`);

const book = {
  title: "Title",
  author: "Author",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

if (publisherName) console.log(publisherName);

//
// Array destructuring
//

const address = ["Main Street", "Maceió", "Alagoas", "570"];

const [, , state = "Rio Largo"] = address;

console.log(`You are in ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);
