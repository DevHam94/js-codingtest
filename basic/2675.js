/*
  문자열 반복

  문자열 s를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.
  즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 
  P를 만들면 된다. S에는 QR Code "alphanumeric"문자만 들어있다.
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);

// 한 줄(line)씩 입력받기
for(let i = 1; i <= testCase; i++){
  let [r, s] = input[i].split(' ');
  let result = "";
  // 현재 문자열의 각 문자를 하나씩 확인하며
  for (let j = 0; j <= s.length; j++) {
    // r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r);
  }
  console.log(result);
}
