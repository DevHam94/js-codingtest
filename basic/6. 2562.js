/*
  최댓값
*/
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSynce('/dev/stdin').toString().split('\n');

let maxIndex = 0;
let maxValue = 0;
for (let i = 0; i < 9; i++){ // 모든 데이터를 하나씨 확인하며 
  let data = Number[input[i]];
  if (maxIndex < data) {
    maxValue = data;
    maxIndex = i;
  }
   
}

console.log(maxValue);
console.log(maxIndex + 1);