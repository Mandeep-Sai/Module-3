var n= 8
var s = ['D','D','U','U','U','U','D','D']
function countingValleys(n, s) {
  let init = 0
  let valleys = 0
  for(let i=0;i<s.length;i++){
      if(s[i] === 'D'){
          init -= 1
      }else{
          init += 1
      }
  }
  if(init == 0 && s[i] == "U"){
    valleys += 1
  }
  return console.log(valleys)
}
// 
var c = [0,0,0,0,1,0]
function jumpingOnClouds(c){
  var jumps = [];
   
  let i=0;
  while(i < c.length - 1){
     
      if ((i+2<c.length) && (c[i+2] === 0)) {
          jumps.push(c[i + 2]);
          i+=2;
      } else{
          jumps.push(c[i + 1]);
          i+=1;
      } 
      
  }
  return jumps.length
}
// function repeatedString(s,n){
//   let len = s.length
//   let value = 0
//   if(n%len !== 0){
//     var infinteString = s.repeat(Math.floor(n/len))
//     let additionalLength = n - infinteString.length
//     for(let i=0;i<additionalLength;i++){
//       let str1 = s[i]
//       infinteString = infinteString.concat(str1)  
//     }
//   }else if(n%len === 0){
//     var infinteString = s.repeat(n/len)
//   }
//   for(let i=0 ; i<infinteString.length;i++){
//     if(infinteString[i] === 'a'){
//       value += 1
//     }
//   }
//   return value
// }
function repeatedString(s, n) {
  let x = Math.floor(n / s.length);
  c = 0
  for(let i=0;i<s.length;i++){
    if(s[i] === 'a'){
      c+=1
    }
  }
  let count = c *x
  let rem = n % s.length;

  for (var i = 0; i < rem; i++) {
      if (s.charAt(i) === "a") {
          count++;
      }
  }
  return count;
}