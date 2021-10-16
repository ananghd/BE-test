/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
 const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

 function result(numbers) {
   // Your Code Here
   const maxNumber =  Math.max(...numbers);
   const completeArray = [...Array(maxNumber).keys()];
   const missingNumbers = completeArray.filter(item => !numbers.includes(item));
   return missingNumbers;
 }
 
 console.log(result(numbers));