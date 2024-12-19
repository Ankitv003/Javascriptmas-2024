import shoppingList from "./shoppingList.js";
const main = document.querySelector("main")
/*
    You're shopping for holiday gifts, but money is tight
    so we need to consider the cheapest items first.
    Use JavaScript's built-in array sort() (or toSorted()) method to
    write a function that returns an array of products sorted 
    by price, cheapest to most expensive. 
    
    Log the sorted array to the console to double-check you
    solved it correctly.
*/

function compare(a,b){
    const priceA= a.price
    const priceB = b.price
    return priceA-priceB
    
}
function sortProducts(list){
    return list.sort(compare)
}

const listByCheapest = sortProducts(shoppingList)

const giftDiv = document.createElement("div");
giftDiv.innerHTML = listByCheapest
    .map(item => `<p>${item.product}: $${item.price.toFixed(2)}</p>`) 
    .join("");
giftDiv.classList.add("gift-container")    
main.append(giftDiv)
// console.log(sortProducts(shoppingList))

listByCheapest.forEach(item => {
    console.log(`${item.product}: $${item.price.toFixed(2)}`);
});
/**
 * Stretch goals:
 * 
 * 1. Log the items to the console in a more formatted way, 
 *    like this (one item per line):
 * 
 *    💕: $0
 *    🍬: $0.49
 *    🍫: $0.99
 *    🍭: $1.99
 *    🧁: $2.99
 *    ...etc.
 * 
 * 2. Create a UI for this by displaying the unsorted items first, then
 *    having a button that will sort the items on the page by price.
 */