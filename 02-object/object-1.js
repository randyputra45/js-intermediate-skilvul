const person = {
  name: "person A",
  age: 100,
  favDrinks: [
    "coffee",
    "jamu temulawak",
    "tea"
  ],
  greeting: function() {
    console.log("hello world")
  }
}
  
  /// EDIT HERE
person.name = "Randy Christian Saputra"
person.favDrinks[1] = "tap water"
person.greeting = (name) => {
  console.log("Hello, ", name)
}
  
/// STOP
console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));