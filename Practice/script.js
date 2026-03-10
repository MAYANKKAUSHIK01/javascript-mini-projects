// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


// const Number = [10,20,10,30,40,40];

// const map =new Map();

// Number.forEach((num,i)=> {
//     map.set(num,(map.get(num)
//     ||[]).concat(i));
// });
// let result = [...Number];
// map.forEach(index=>{
//     if(index.length>1){
//         const i = index[Math.floor(Math.random()*index.length)];
//         result[i]*=2
//     }
//     else{
//         result[index]*=2;
//     }
// })


// console.log(result);


// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// function mirror(string){
//     let rev = "";
//   for(let i=string.length-1;i>=0;i--){
//    rev+=string[i];
//   }
//   return  string+rev;
// }

// const reverse =mirror("hello");

// console.log(reverse);




// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


// function validator(password){
//   if(password.length >=8&&
//     /[A-Z]/.test(password)&&
//     /[a-z]/.test(password)&&
//     /[0-9]/.test(password)
//   ){
//     console.log(`${password}:is valid`)
//   }
//   else{
//     console.log(`${password}:is Invalid`)
//   }


// if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){8,}/.test(password)){
//     console.log(`${password}:is valid`);
// }
// else{
//         console.log(`${password}:is Invalid`);
// }

// }


// const mypass = validator("Mayank21");



// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


// function positivsum(arr){
//     // let sum =0;
//     // array.forEach((num) => {
//     //     if(num>0){
//     //       sum+=num;
//     //     }
        
//     // });
//     // return sum;


//     return arr.reduce((sum,num)=>{
//         return num>0?sum+=num:sum;
//     },0);
// }


// const array = positivsum([1,2,3,-4]);
// console.log(array);



// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


// function vcounter(string){
//     let counter = 0;
//     for(let i=0;i<string.length-1;i++){
//     if(/[A,a,e,E,i,I,o,O,u,U]/.test(string[i])){
//       counter++;
//     }
//     }
//     return counter;
// }

// const vcounter = str=>(str.match(/[aeiou]/gi||[])).length;

// console.log(vcounter("Mayank"));



// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

// function savenote(note){
//     const notes = JSON.parse(localStorage.getItem("notes"))||[];
//     notes.push(note)
//     localStorage.setItem("notes",JSON.stringify(notes));
// }

// const note={
//     "tittle":"shopping",
//     content:"Buy milk & bread",
//     date:"2026-03-06"
// };

// savenote(note);



// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


// async function double(arr) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         const result = arr.map(num=>num*2);
//         resolve(result);
//         },500)
//     })
// }


// async function run() {
//     const result = await double([3,45,5]);
//     console.log(result);
// }
// run();



// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

// async function placeOrder(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//           resolve("oder is placed!");
//         },Math.random()*2000)
//     })
// }


// async function run(){
//     const message = await placeOrder();
//     console.log(message);
// }
// run();



// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.



// async function brewCoffee() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//        resolve(`the coffee is ready`)
//         },(Math.random()*2000))
//     })
    
// }

// async function run() {
//     const massage = await brewCoffee();
//     console.log(massage);
    
// }
// run();


// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion


// function filterProducts(products,criterion){
// return products.filter(product =>product.type===criterion);
// }

// const products = [
//   {name:"Shirt", type:"men"},
//   {name:"Dress", type:"women"},
//   {name:"Jacket", type:"men"},
//   {name:"Skirt", type:"women"}
// ];

// const result = filterProducts(products,"men");
// console.log(result);



// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

// function setauthToken(token,expirationmin){
//     const expirationTime = Date.now()+expirationmin*60*1000;
//     const authData={
//         token:token,
//         expiresAt:expirationTime
//     };
//     localStorage.setItem("authToken",JSON.stringify(authData));
// }

// function getauthToken(){
//     const data =JSON.parse(localStorage.getItem("authToken"));
//     if(!data)return null;
//     if(Date.now()>data.expiresAt){
//         localStorage.removeItem("authToken");
//         console.log("Token expired and removed");
//         return null;
//     }
//     return data.token;
// }
// setauthToken("acvevere",1);
// console.log(getauthToken());



// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.


// function totalcost(product){
//     return product.reduce((sum,product)=> {return sum+product.price*product.quantity},0)
// }

// const cart = [
//   {name:"Shirt", price:20, quantity:2},
//   {name:"Shoes", price:50, quantity:1},
//   {name:"Hat", price:10, quantity:3}
// ];


// const total = totalcost(cart);
// console.log(total);



// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

// function smoothScrollToTop(){
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     });
// }

// document.addEventListener("scroll",function(){
//  const btn = document.getElementById("button");
//  if(window.scrollY>300){
//     btn.style.display="block";
//  }
//  else{
//     btn.style.display="none";
//  }
// })

