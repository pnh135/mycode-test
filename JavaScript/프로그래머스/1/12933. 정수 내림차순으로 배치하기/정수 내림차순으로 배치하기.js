function solution(n) {
    let arr = [];
    const sum=String(n).split('')
    for (i=0; i<sum.length; i++) {
        arr.push(sum[i])
    }
    const sortedNum = arr.sort(function (a, b) {
  return b-a
    })
    const JoinStr = sortedNum.join('')
    return Number(JoinStr)
}