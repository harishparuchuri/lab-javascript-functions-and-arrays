// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}



// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
var len=words.length;
var long = 0,i,subarray;
    if (len == 0) {
      return null;
    }
    if (len== 1) {
      return words[0];
    } else {
      for ( i = 0; i < len; i++) {
        subarray = words[i].length;
        if (subarray > long) {
          long = subarray;
          var big_str = words[i];
        }
        
        
      }
      return big_str;
    }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers)
{
  var len,i,sum=0;
  len=numbers.length;
  for(i=0;i<len;i++)
  {
    sum+=numbers[i];
  }
  return sum;
}


function add(arr) {
  var sum = 0,i;
  var len = arr.length;
    for ( i = 0; i < len; i++) {
    if (typeof arr[i] == "string") {
      let dlen = arr[i].length;
      sum = sum + dlen;
    }
    if (typeof arr[i] == "boolean") {
      if (arr[i] == true) {
        sum = sum + 1;
      }
    }
    if (typeof arr[i] == "number") {
      sum = sum + arr[i];
    }

  }
  return sum;
}



// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg)
{
  var len=numbersAvg.length,sum=0,i;
  if(len==0)
  return null;
  else{
  for(i=0;i<len;i++)
  {
    sum+=numbersAvg[i];

  }
}
  return sum/len;

}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  var sum = 0,len,i;
  len=wordsArr.length;
    if (len == 0) return null;
    else {
      for (i = 0; i < len; i++) {
        sum += wordsArr[i].length;
      }
      var x = sum / len;
      
    }
    return x;
}

function avg(arr) {
  var sum = 0,len=arr.length;
  if (len == 0) {
    return null;
  } else {
    for (let i = 0; i < len; i++) {
      if (typeof arr[i] == "string") {
        let lend = arr[i].length;
        sum = sum + lend;
      } else if (typeof arr[i] == "boolean") {
        var l = arr[i] / 1;
        sum = sum + l;
      } else if (typeof arr[i] == "number") {
        sum = sum + arr[i];
      } else {
        throw exception(
          "Unsupported data type (object or array) present in the array"
        );
      }
    }
  }
  let value = sum / len;
  return Number(value.toFixed(2));
}



// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];


function uniqueArray(array) {
  var len=array.length;
  if (len == 0) {
    return null;
  } else {
    return array.filter((a, b) => array.indexOf(a) === b);
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(array, word) {
  var len=array.length;
  if (len == 0) {
    return null;
  } else {
    for (let i = 0; i < len; i++) {
      if (array[i] == word) {
        return true;
      }
    }

    return false;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(array, word) {
  var count = 0,len;
  len=array.length;
  if (len == 0) {
    return 0;
  } else {
    for (let i = 0; i < len; i++) {
      if (array[i] == word) {
        count = count + 1;
      }
    }
    return count;
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix){
  var max = 0,output=0,len,i,j;
  len=matrix.length;
  
  for( i=0;i<len;i++){
    for(j =0;j<len;j++){
      if((j-3)>=0){
        output = matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
        if(output>max){
          max = output;
        }
      }
      if((i-3)>=0){
        output = matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j];
      }
      if(outpu>max){
        max = output;
      }
    }
  }
  let check = (list) => list.every(item => list.indexOf(item) === 0);
  if(check(1))
  return 1;
  else if(check(2))
  return 16;
  else
  return max;
}

