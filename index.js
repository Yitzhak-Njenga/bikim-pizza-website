// var  pizzaCost, pizzaAmount ;

// getPizzaCostSource


// getNumberOfPizzaSource


// getButtonForOrderingPizza
// orderButton = document.getElementById("buyButton")

var pizzaCost = document.getElementById("pizzaOptions")

function buyPizza() {
    

    var pizzaCostInput = document.getElementById("pizzaOptions")
    var pizzaCost = pizzaCostInput.value
    var numberOfPizzasInput = document.getElementById("numberOfPizzasInput")
    var numberOfPizzas = numberOfPizzasInput.value
    alert("buy " + numberOfPizzas + " " +" pizza(s) " + " each worth "+ pizzaCost )
    alert("the total cost is " + numberOfPizzas * pizzaCost)
    confirm("would you like to continue to purchase")
    alert("Purchase successful. ")  
    
}

buyPizza()

