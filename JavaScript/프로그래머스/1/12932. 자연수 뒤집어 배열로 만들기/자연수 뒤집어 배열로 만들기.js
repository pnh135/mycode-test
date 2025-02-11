function solution(n) {
    let arr = [];
    const num= String(n)
    for (i=0; i<(num.length); i++){
        let sum = num.slice(i, i+1)
        arr.push(Number(sum));
    }
    const answer = arr.reverse()
    return answer;
}