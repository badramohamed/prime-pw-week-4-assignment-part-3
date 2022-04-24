console.log('***** Cart Functions *****');
1. // Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
console.log(basket.length);
const maxItems= 5; 

2. //Create a function called isFull(). It should:
//return false if the basket contains less than max number of items
//return true otherwise (equal or more than maxItems)
function addItem(item) { 
    console.log('Adding item to basket:', item); 
    basket.push(item);
    return true;
  }
  // test code // push it 
console.log(addItem('pears'));
console.log('added one item to basket to test function', basket);
  addItem('sushi');
  addItem('watermelon');
  addItem('coke');
  addItem('utensils')
  console.log('basket now has:', basket);


3. //Create a function called listItems. It should:
//loop over the items in the basket array
// console.log each individual item on a new line
  
console.log('create a loop to list all items in basket');
function listItems(items){
     for(items of basket){
         console.log ('items in basket', items);
} }// end function 
    
//test listnitem function
listItems(); 



4.  //Create a function called empty. It should:
//reset the basket to an empty array

console.log('i should see a reset to my basket and an empty array');
function empty ()  {
while (basket.length > 0) {
    basket.pop(); 
}
}


//testing empty
console.log ('remove items empty array:', empty(basket.length=0));