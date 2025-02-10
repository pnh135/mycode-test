function solution(n) {
    let answer = 0;
    let num = String(n)
    for (i=0; i<=num.length; i++) {
        let sum= num.slice(i,i+1)
        answer+=Number(sum)
    }
    return answer;
}