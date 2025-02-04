function solution(arr) {
    let sum = 0
    arr.forEach((num) => {
        sum+=num
    })
    const answer = sum/arr.length
    return answer;
}