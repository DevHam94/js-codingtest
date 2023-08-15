// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(x => Number(x));
let max = Math.max(...data);

console.log(max);
console.log(input.indexOf(max) + 1);