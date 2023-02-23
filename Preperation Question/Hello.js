// //1. Array Destructring //
// //2.Programs for Practice.//
// //1. Sum of Two Number ;
// function sum (a,b)
// {
//    let add=a+b;
//     return add;
// }
// console.log (sum(5,7));
// //2.Convert Minutes to Second.
// function Min_to_second (num){
//     var convert = num*60;
//     return convert;
// } 
// console.log(Min_to_second(6));
// //3.Hours in to Second
//  const H_to_S=(num)=>
//  {
//      let hTos = num*3600;
//      return hTos;
//  } 
// console.log (H_to_S(2));
// //4.Write a function that takes the base and height of a triangle and return its area.
// const tri_area = (b,h)=>{
//    let  trArea = (b*h)/2;
//    return trArea;
// }
// console.log (tri_area(3,5));
// //5.Create a function that takes a number as an argument, 
//   //increments the number by +1 and returns the result.
// const incrementNum=(innum)=>{
//      let newNum= innum+1;
//      return newNum;
// }
// console.log (incrementNum(6));
// //6. square Num 
// function square(a){
//     return a*a;
// }
// console.log (square(5));
// //7.Create a function that takes a number as its only argument and returns true 
// //if it's less than or equal to zero, otherwise return false.

// function compare (a){
//     if (a<= 0)
//     {
//      return ("true");
//     }
//     else
//     {
//         return("false");
//     }   
// }
// console.log (compare(7));
// 8.//Create a function that takes the age in years and returns the age in days.
// function calculateAge(age){
//     let ageDays = age*365;
//     return ageDays;
// }

// console.log (calculateAge(20));

// 9.//Create a function that takes an array containing only numbers and return the first element.
// function  firstElement(arr) {
//     let arrfirst=arr.shift();
//     return arrfirst;
// }

// console.log(firstElement([50,58,48,52]));

// 10.//Return the Remainder from Two Numbers
// function remainder(num1,num2) {
  
// let rem = num1%num2;
// return rem;    
// }
// console.log (remainder(10,3));
// 11.//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
// function nameString(value) {
//     let firstString = value;
//     let endString = "Edabit";
//    let result=firstString+endString;
//    return result;
// }

// console.log(nameString("myName"));
// 12.//Power Calculator
// function  powerCalc(voltage, current ) {
//     let calc= voltage*current;
//     return calc;
// }

// console.log(powerCalc(20,10));
// 13.// Return Something to me .
// function somethingReturn(a) {
// return "Something" + a;
// }
// console.log (somethingReturn(" is better than nothing"));
// 14.//Maximum edge of triangle 
// // (side1+side2) - 1 = maximum number of third edge;

// function nextEdge(s1,s2) {
//     let thirdEdge = (s1+s2)-1;
//     return thirdEdge;
// }
// console.log (nextEdge (50,12));

15.//Find the Perimeter of a Rectangle
// function perimeter(a,b) {
//   let prmtr = a*2 + b*2;
//   return prmtr; 
// }
// console.log(perimeter(20,10));
// 16.//sum of poligon angle formula : (n-2) * 180;
// function  polygon (n) {
//    let  poly = (n-2)*180;
//    if (n>2)
//    {
//    return poly;
//    }
//    else {
//         console.log ("please enter the value more than 2");
//        }
//    }
//       console.log (polygon(6));
// 17. You are counting points for a basketball game, given the amount of 2-pointers scored 
// and 3-pointers scored, find the final points for the team and return that value.

//  function bsballScore (pointer1, pointer2){
//      const finalScore = pointer1*2+pointer2*3;
//      return (finalScore);
//  }

//  console.log(bsballScore(7,5));

// 18.//less than 100.
// function lessThan100(V1,V2) {
//    let  sumValue = V1+V2;
//    if (sumValue<100){
//     return "true";
//     }
//    else {
//        return "false";
// //    }  }
// //    console.log(lessThan100(10,20));
// //    console.log(lessThan100(90,20));

// // 19.//The Farm Problem count legs of given number of animals.

// // function animals(chicken, cows , pigs) {
// //    let total_legs = chicken*2+ cows*4 +pigs*4 ;
// //    return total_legs; 

// // }

// // console.log (animals(5,2,8));
// //20.Using the "&&" Operator

// // function  checkingStatus(a,b) {
   
// //        if (a == " false " && b== "true") 
// //        {
// //             return "false";
// //        }
// //        if (a== "true" && b== "false")
// //           {
// //             return  "false";
// //           }
// //       else {
// //            return "true";
// //         }
// // }

// // console.log(checkingStatus("false","false"));

// 21.//Samenumber Function 
// // function sameNumber(num1,num2) 
// //     {
// //     if (num1 === num2) {
// //         return "true";
// //     }
// //     else 
// //     {
// //         return "false";
// //     }
// //     }
// //  console.log(sameNumber(2,4));
// 22.//take object and return votecounts. First Method
// let object = {
//     upVote :22,
//     downVote :12 ,
//     getVotecount: function (upVote,downVote) {
//         return vote= this.upVote - this.downVote;        
//     }
// }
// console.log(object.getVotecount(12,5));
// // Second Method
// function getVoteCount(upVote,downVote) {
//     this.upVote = upVote;
//     this.downVote = downVote;    
//     return upVote-downVote;
// }
// console.log(getVoteCount(20,13));

// 23.//Take String as an input and conevrt it into Array{use split method };
// var num = '1,2,3,4,5,6';
// let arr = num.split(',');
//  console.log(arr);
// var num = (1,2,3,4,5,6);
// var newNum = String(num);
// let array = newNum.split();  
// console.log(array);
24.//Given two arguments, return an array which contains these two arguments.
function arr(...arg) {
    for (i=0;i<=2;i++){
        arr[i] = ++arr[i];
    }  
    return arr[i];
}

console.log(arr(3,4));











