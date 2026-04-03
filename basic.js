// // let a=20;
// // console.log(a)
// // print all even numbers 0 to 100
// // for(let i=0;i<=100;i++){
// //     if(i%2==0){
// //         console.log(i);
// //     }
// // // }
// // let name=prompt("enter user name");
// // console.log(` @${name}${name.length}`)

// // let arr=[10,12,34,34,23,56,19];
// // let sum=0;
// // for(let i of arr){
// //      sum=i+sum;
// // }
// // console.log(sum/arr.length); 


// let a=[1,2,3,4,5];
// // a.shift()


// a.slice(1,2);
// console.log(a);
// let mode=0;
// btn=document.querySelector("button");
// body=document.querySelector("body");
// btn.addEventListener('click',()=>{
//     if(mode%2==0){
//         console.log("bg is black");
//         body.style.backgroundColor="black";
//         mode++;
//     }
//     else{
//         body.style.backgroundColor="white";
//         mode++;
//     }

// })


// even or odd 
// let val=prompt("enter a number and check odd or even");
// let b=document.querySelector("h1")
// function evenodd(a){
//     if(a%2==0){
//         b.innerText="this is even";
//     }
//     else{
//         b.innerText="this is odd";
//     }

// }
// evenodd(val);
// reverse string 
let str="ansh"
function rev(str){

    let a=str.split("");
    console.log(a);
    a.reverse();
    // console.log(a);
    let b=a.join("");
    console.log(b);


}
rev(str);