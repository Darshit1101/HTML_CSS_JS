// 1
// for(let num=0; num<=100; num++){
//     console.log("num = " , num);
// }


// 2
// let marks = [85 , 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


// 3
// let items = [250, 645 , 300, 900, 50];
// let idx = 0;
// for(let val of items){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`value after offer = ${items[idx]}`);
//     idx++;
// }


// 4
// function myFunction(){
//     console.log("welcome my house");
//     console.log("darshit");
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();


// 5
// function sum(x, y){
//     console.log(x+y);  
// }


// 6
// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val,idx, arr)=>{
//     console.log(val.toUpperCase(), idx, arr);
// });


// 7
// let nums = [67, 52, 39];
// nums.forEach((num) => {
//     console.log(num * num);
// });


// 8
// let arr = [1,2,3,4,5,6];
// let evenArr = arr.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(evenArr);


// 9
// let arr = [21, , 3, 4];
// const output = arr.reduce((res, curr)  => {
//     return res + curr;
// });
// console.log(output);


// 10
// let marks = [97, 64, 32, 49, 99, 96, 86];
// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers);


// 11
// let n = prompt("enter a number : ");
// let arr = [];
// for (let i=1; i <= n;i++){
//     arr[i-1] = i;
// }
// console.log(arr);


// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a, b, sumCallback){
//     sumCallback(a,b);
// }
// calculator(1, 2,sum);


// function getData(dataId){
//     setTimeout(() => {
//         console.log("data",dataId);
//     },2000);
// }


// function getData(dataId, getNextData){
//     setTimeout( () => {
//         console.log("data",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });


// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         },2000);
//     });
// }
// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
// }


// let number = prompt("enter your number")
// number = Number.parseInt(number)
// if (number > 4) {
//     location.href = "https://google.com"
// }


// setInterval(() => {
//     let color = prompt("enter the page background color")
//     document.body.style.background= color   
// },6000)


var button = document.getElementById("bt");
  function handleClick() {
    alert("Button clicked!");
  }
  button.onclick = handleClick;
  // Using addEventListener
button.addEventListener("click", handleClick);



