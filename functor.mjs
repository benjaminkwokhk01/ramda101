import * as R from "ramda";
/**
 * Functor - something that can be mapped over.
 */

// Array is a functor
const numbers = [1, 3, 5, 7, 9];

const newNumbers = numbers.map(num => num * 2).map(num => num.toString());

console.log("newNumbers: ", newNumbers);

// Object is not a functor!
const person = { firstName: "Benjamin", lastName: "Kwok" };

// try {
//   person.map(val => console.log("Value: ", val));
// } catch (err) {
//   console.log("person.map is not a function");
// }

// But I have seen a mappable object before... can we make an object a functor?
class ObjectMappable {
  constructor(object) {
    this.object = object;
  }

  map(f) {
    let mapped = {};
    for (const key in this.object) {
      mapped[key] = f(this.object[key]);
    }
    return new ObjectMappable(mapped);
  }

  fold() {
    return this.object;
  }
}
const mappablePerson = new ObjectMappable(person);

const newPerson = mappablePerson.map(value => value.toUpperCase()).fold();

console.log("newPerson: ", newPerson);

// But why is functor important? It encourages function composition!
class Wrapper {
  constructor(something) {
    this.something = something;
  }

  map(f) {
    return new Wrapper(f(this.something));
  }

  fold() {
    return this.something;
  }
}

const string = "call me bro";

const mappableString = new Wrapper(string);

const newString = mappableString
  .map(x => x.toUpperCase())
  .map(x => x.slice(0, 4))
  .map(x => `${x} THE POLICE`)
  .map(x => x.concat("!!!!!"))
  .fold();

const ramdaString = R.pipe(
  R.toUpper,
  R.slice(0, 4),
  R.flip(R.concat)(" THE POLICE"),
  R.flip(R.concat)("!!!!!!")
)(string);

console.log("newString: ", newString);
console.log("ramdaString: ", ramdaString);

/**
 * Functor is useful because you do not care about the type of the value
 * You only need to know you can map some function over it
 */
