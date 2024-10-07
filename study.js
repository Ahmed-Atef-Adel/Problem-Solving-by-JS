'use strict'
// function hello(x=""){
//     console.log('Hello ' + x);
// }

// hello();

// function count(...number){
//     let sum = 0;
//     for(let i=0 ; i<number.length ; i++){
//         sum += number[i];
//     }
//     return console.log(sum);
// }

// count(1,5,6,6);

/////////////////////////////////

// Math.abs(3) - Math.abs(5) >= 8
// if (Math.abs(3) - Math.abs(5) >= 8)
//     console.log("True")
// else{console.log("wrong");
// }

// let x;
// x == 20;
// if (x == 20)
//     console.log("true");
// else
//     console.log("false");


//////////////////////

// let user = {
//     // property
//     firstName:"‘abdelrahman’",
//     lastName:"‘gamal’",
//     email:"‘test@gmail.com’",
//     age:26,
//     skills:["‘html","‘css’","‘js’","‘python’","‘php’"],
//     active:false,
//     phoneNumber:{
//         first:"‘0106547687’",
//         second:"‘0126574687’",
//     },
//     address:{
//         Egypt:"‘elmohandsen’",
//         Uae:"‘abu dhabi’",
//     },
//     // method
//     isActive:function(){
//         if(user.active === true){
//             return "‘hello user’";
//         }
//         else{
//             return "‘sorry you are not active’";
//         }
//     },
//     getAge:function(){
//         if(user.age >= 18)
//         {
//             return "‘availalbe’";
//         }
//         else{
//             return "‘unavailable’";
//         }
//     },
// };

// console.log(user.lastName);
// console.log(user.getAge());
// console.log(user[0]);


/////////////////

// x = this;
// console.log(x)

/////////////////////

// function test (){
//     return this
// }

// console.log(test());

///////////////////////

// let a1 = {
//     num1:1,
//     hello: function(){
//         return console.log("Hello there!")
//     }
// }
// let a2 = {
//     num2:2,
// }
// let a3 = {
//     num3:3,
// }
// let a4 = Object.assign(a1,a2,a3,{
//     num4:4,
// });
// console.log(a4)

////////arrow function /////////

// let x = () => 8;
// let x = _ => 8;
// // let x = num => num*2;
// let x = (num,num2) => num*num2;
// console.log(x(8,4));

/////////////////////////

