function maxChar(str){
  let maxChar = ''
  let count = 0
  let charMap = {}
  for(let char of str){
    if(charMap[char]){
      charMap[char]++
    }else{
      charMap[char]=1
    }
  }
  for(let char in charMap){
    if(charMap[char]>count){
      count = charMap[char]
      maxChar = char
    }
  }
  return console.log(maxChar)
  
}
//  2
function sortString(str){
  return str.split('').sort().join('')
}
function anagram(stringA, stringB){
  stringA = stringA.replace(/[^a-zA-Z]+/g, '');
  stringB = stringB.replace(/[^a-zA-Z]+/g, '');
  return sortString(stringA) === sortString(stringB)
}
// 3
var word = 'listen'
var options = ['enlists', 'google', 'inlets']
function anagram2(word, options){
  word = word.replace(/[^a-zA-Z]+/g, '');
  let sortedWord = word.split('').sort().join('');
  for(let i=0;i<options.length;i++){
    if(sortedWord === options[i].split('').sort().join('')){
      return options[i]
    }
  }
}
// 4
function palindrome(str){
  let strA = str.toLowerCase();
  let strB = strA.split('').reverse().join('');  
  return strA === strB
}
// 

function reverseInt(int){
  const revInt = int.toString().split('').reverse().join('');
  return parseInt(revInt) * Math.sign(int);
}
// 
function step(n){
	// let result = [];
	for(let i = 0; i < n; i++) {
    let block = "*".repeat(i + 1);
		let spaces = " ".repeat(n - block);		
    // result.push(`${block}${spaces}`);
    // console.log(`${block}${spaces}`)
    console.log(block+spaces)
	}
	// return result.join("\n");
}
// 
function reverse(str){
  return str.split('').reverse().join('')
}
// 

function chunk(array, size) {
  const chunk_arr = [];
  let index = 0;
  while (index < array.length) {
    chunk_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunk_arr;
}
// 
// function pyramid(n){
// 	for(let i = 0; i < n; i++) {
//     let total = (n*2)-1
//     let block = "*".repeat(i*2 + 1);
// 		let spaces = " ".repeat((total - block)/2);		
//     console.log((spaces)+block+(spaces))
// 	}
// }
function pyramid(n) {
  for(let i=1; i<= n; i++){
    let spc = ' '.repeat(n-i);
    let blck = '*'. repeat(i*2 -1)
    console.log(spc + blck + spc);
  }
}

// 
function matrix(n){
  let array = []
  for(let i=0;i<n;i++){
    let subArray = []
    for(let j=0;j<n;j++){
      subArray[j] = Math.floor(Math.random()*10)
    }
    array[i] = subArray
  }
  console.log(array)
}