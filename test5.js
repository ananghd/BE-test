/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
 const words = ['flower', 'flow', 'flight'];

 function result(words) {
   // Your Code Here
   return [...new Set(words.map(word => word.substr(0,2)))];
 }
 
 console.log(result(words));