// function hello(x=""){
//     console.log('Hello ' + x);
// }

// hello();

// function count(...number){
//     let sum = 0;
//     for(i=0 ; i<number.length ; i++){
//         sum += number[i];
//     }
//     return console.log(sum);
// }

// count(1,5,6,6);


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

let user = {
    // property
    firstName:"‘abdelrahman’",
    lastName:"‘gamal’",
    email:"‘test@gmail.com’",
    age:26,
    skills:["‘html","‘css’","‘js’","‘python’","‘php’"],
    active:false,
    phoneNumber:{
        first:"‘0106547687’",
        second:"‘0126574687’",
    },
    address:{
        Egypt:"‘elmohandsen’",
        Uae:"‘abu dhabi’",
    },
    // method
    isActive:function(){
        if(user.active === true){
            return "‘hello user’";
        }
        else{
            return "‘sorry you are not active’";
        }
    },
    getAge:function(){
        if(user.age >= 18)
        {
            return "‘availalbe’";
        }
        else{
            return "‘unavailable’";
        }
    },
};

console.log(user.lastName);
console.log(user.getAge());
console.log(user[0]);
