function solution(n) {
    let answer = 0
    let Root = Math.sqrt(n)
    if (Root===Math.ceil(Root)) {
        answer = (Root+1)**2
    } else {
        answer = -1
    }
    return answer;
}