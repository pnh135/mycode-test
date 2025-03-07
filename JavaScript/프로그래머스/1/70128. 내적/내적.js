function solution(a, b) {
    let answer = 0
    for (i=0; i<a.length; i++) {
        sum= a[i]*b[i]
        answer +=sum
    }
    return answer;
}