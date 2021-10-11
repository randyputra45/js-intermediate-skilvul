function getObjectValue(obj, path) {
    path = path.split(".");
    for (var i = 0; i < path.length; i++)
        obj = obj[path[i]];
    if (obj == undefined)
        return null;
    else
        return obj;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)

// using reduce
// function ref(obj, path) {
//     return path.split(".").reduce(function(o, x) { return o[x] }, obj);
// }

// console.log(ref(obj, path))