///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce(function(acc, elem){
    return acc + elem
})


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, Tax) => {
    return cartTotal + (cartTotal * Tax) - couponValue
}
console.log(calcFinalPrice(10, 2, .06))




//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    name: "String" - restaraunt will need info on the customers name to ensure they have the right person.
    allergies: "String" - restaraunt will need info on allergies to ensure the correct ingredients are removed from any dishes.
    address: "String" - restaraunt will need info on customers address to ensure they have the right place.
    utensils : boolean - restaraunt will need to know if customer needs utensils to be provided.


*/

/*
    Now, create a customer object following your own
    guidelines.
*/


const customer = {
    name: "Corbin",
    allergies: "peanut",
    address: "2117 New Address lane",
    utensils: true
}

