/******************
 * YOUR CODE HERE *
 ******************/
 const veggies = 0
    const first = getFirstItemFrom(veggies(0));
      return first

 
function getLast(arr) {
  return arr.pop();   //return last element altering the original array
    return arr.slice(-1)[0];  // return last element without altering the original array
      }
        
 
function getIndex3(str){
  if (str.length >=4) {
    return str[3];
  } else{
    if(str.length > 0)
      return str[str.length - 1]
  }
}
function isLongList (numArr){
  if (typeof numArr[0] ==='number'  >=  numArr.length >= 10){
      return true 
        }else{
          return false
            }
}
              
        
function firstItemIsNumber(arr) {
  if (Array.isArray(arr) && arr.length > 0  && typeof arr[0]  === 'number');
    }
      return false;

      

function secondCharOThirdString(arr) {
  if (arr.array(arr) || arr.length < 3 || typeof arr[2] !== 'string') {
      return "This isn't a string";
        }
          return fruits(1)[3];
            }
              
    

        



 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}


if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
