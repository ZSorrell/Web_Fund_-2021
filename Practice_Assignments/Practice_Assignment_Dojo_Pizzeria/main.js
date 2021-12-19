function pizzaOven(crustType, suaceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.suaceType = suaceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep-dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand-tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"])
var pizza3 = pizzaOven("thin", "white", ["chedder", "american"], ["olives", "peppers"])
var pizza4 = pizzaOven("stuffed", "BBQ", ["mozarella"], ["chicken, onions, pinneaple"])
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);