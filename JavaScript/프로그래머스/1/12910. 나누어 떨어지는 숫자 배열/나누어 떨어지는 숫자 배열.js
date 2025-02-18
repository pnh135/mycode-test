function solution(arr, divisor) {
    const num =arr.filter((num)=> num%divisor==0)
    if (num.length ==0 ) {
        num.push(-1)
    }
    answer = num.sort(function (a, b) {
  return a - b;
    })
    return answer
}