
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
//////Answer
// function abbrevName(name){
//     let finalwords=""
//     let words=name.split(" ")
//     for(let i=0; i<words.length; i++){
//       if(i>0){
//         finalwords+="."
//       }
//       finalwords+=(words[i].at(0)).toUpperCase()
//     }
//   console.log(finalwords)
// }

// abbrevName("Rohan Katwal")
// var x = 'somestring';
// console.log(x.at(0));



//
// function invert(array) {
//   let newarray=[]
//    for(let i=0;i<array.length;i++){
//      newarray.push(array[i]*-1);
//    }
//   console.log(newarray)
// }

// invert([1,2,3,4,5])


// function removeExclamationMarks(s) {
//   let r=""
//   for(let i=0;i<s.length;i++){
//     if(!s[i].includes("!")){
//       r+=s[i]
//     }
//   }
//   console.log(r)
// }

// removeExclamationMarks("Hello!! ojn")

// function boolToWord(bool) {
//   console.log("Yes" ? true : false)
// }

// boolToWord("Yes")


// //check if letter has 4 lenght in array
// function friend(friends){
//   //your code here
//   let myfriends=[]
//   for(let i=0; i<friends.length;i++){
//     if(friends[i].length===4){
//       myfriends.push(friends[i])
//     }
//   }
//   console.log(myfriends)
// }

// friend(["Ryan", "Kieran", "Mark"])

// function doubleChar(str) {
//   let output=''
//   for(let i=0;i<str.length;i++){
//     output+=str[i]+str[i]
//   }
//   console.log(output)
// }

// doubleChar("abcd")

// //sum of negative nad postove sum
// function countPositivesSumNegatives(input) {
//   let result =[ ]
//   let postivesum=0;
//   let negativesum=0;
//   for(let i=0;i<input.length;i++){
  
//     if(input[i]>0){
//       postivesum+=input[i]
//     }else{
//       negativesum+=input[i]
//     }
   
//   }
//    result.push(postivesum)
//   result.push(negativesum)
//   console.log(result)
// }

// function countPositivesSumNegatives(input) {
//   if(!input || input.length===0) return []
//   let countpositive=0;
//   let negativesum=0;
//   for(let i=0;i<input.length;i++){
//     input[i]>0 ? countpositive++: negativesum+=input[i]

//   }
//   console.log( [countpositive, negativesum])
// }

// countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14 -15])



// //binary to integer
// const binaryArrayToNumber = arr => {
//   let integer=0;
//   let arrlength=arr.length
//   for(let i=0;i<arrlength;i++){
//     let power=arrlength-1-i;
//     integer+=arr[i]*Math.pow(2,power)
//   }
//   console.log(integer)
// };
// binaryArrayToNumber([0, 1, 0, 1])


//make sentecne to array
// function stringToArray(string){ 
//   let arr=[]
//   let tempword=""
// 	for(let i=0; i<string.length;i++){
//     console.log(string[i])
//     if(string[i]===" "){
//       arr.push(tempword)
//       tempword=""
//     }else{
//       tempword+=string[i]
//     }
//   }
//   if(tempword) arr.push(tempword)//check if we are at last word
//   console.log(arr)

// }

// //solution 2
// function stringToArray(string){ 
//   let arr=[]
//   let tempword=""
// 	for(let i=0; i<string.length;i++){
//     if(string[i]===" "){
//       arr.push(tempword)
//       tempword=""
//     }else{
//       tempword+=string[i]
//       if(i===string.length-1){//check if we are at last word
//         arr.push(tempword)
//       }
//     }
//   }
//   // return arr
//   console.log(arr)
  

// }

// stringToArray("Rohan Katwal is my name")


// function greet(name){
//   console.log( `Hello ${name} how are you doing today?`)
// }

// greet("rohan")


//chck if the array sum is odd r even
// function oddOrEven(array) {
//    let sum=0
//   for(let i=0; i<array.length;i++){
//     sum+=array[i]
//   }
//   if(sum===0 || sum%2==0){
//     console.log( "even")
//   }else{
//      console.log( "odd")
//   }
// }

// oddOrEven([1,2,3])



// var countSheep = function (num){
//   let result=""
//   for(let i=0;i<num;i++){
//       result += `${i} sheep..`;
//   }
//   console.log(result)
// }
// countSheep(2)


//minus list
// function arrayDiff(a, b) {
//   let finalArr = [];

//   for (let i = 0; i < a.length; i++) {
//     let found = false;
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       finalArr.push(a[i]);
//     }
//   }

//   console.log(finalArr)
// }


// arrayDiff([1,2], [2])'



//mplement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements

// var uniqueInOrder=function(iterable){
//   //your code here - remember iterable can be a string or an array
//   let result=[]
//   let check
//   for(let i=0;i<iterable.length;i++){
//     if(iterable[i]!==check){
//       result.push(iterable[i])
//       check=iterable[i]
//     }
//   }
//   console.log(check)
//   console.log(result)
  
// }

// uniqueInOrder('AAAABBBCCDAABBB')


///n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// function digPow(n, p){
//   // ...
//   let total=0
//   const digit=n.toString().split("").map(Number)
//   for(let i=0;i<digit.length;i++){
//     total+=Math.pow(digit[i],p+i)
//   }
//   return total %n===0? total/n: -1
// }


// function validatePIN (pin) {
//   const digit=pin.split("").map(Number)
//   console.log(digit)
//   if (digit.includes(NaN) || digit.length!==6 & digit.length!==4){
//     console.log(false)
//   }else{
//     console.log(true)
//   }

// }
// validatePIN("123")


//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// function reverseWords(str) {
//   // Go for it
//   let words=str.split(" ")
//   let resut=[]
//   for(let i=0;i<words.length;i++){
//     let word=words[i]
//     let reversestr=''
//     for(let j=word.length-1;j>=0;j--){
//       reversestr+=word[j]
      
//     }
//     resut.push(reversestr)
//   }
//    return resut.join(" ");
// }

// // console.log(reverseWords('  double  spaced  words  '));


// function countBy(x, n) {
//   let z = [];
//   for(let i=1;i<=n;i++){
//     let b=x*i
//     z.push(b)
//   }
//   return z;
// }

// console.log(countBy(2,5))


// function descendingOrder(n){
//     let a=String(n).split("").map(Number)
//     let result=''
//     for(let i =0;i<;i--){
//         // console.log(a[i])
//         result+=a[i]
//     }
//     return result
// }

// console.log(descendingOrder(1021))


// Question Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { 
    value :function toJadenCase() {
     let words=this.split(' ');
     for(let i=0;i<words.length;i++){
        if(words[i].length>0){
          words[i]=words[i][0].toUpperCase()+words[i].slice(1)//words[i][0] gets the first letter of the word and capitalize
          //words[i].slice(1) gets the rest of the word (from index 1 to end)
        }
    }
    return words.join(' ') //["Hello", "World"] becomes "Hello World".
   }
  }
);

console.log("most trees are blue".toJadenCase());
// Output: "Most Trees Are Blue"


