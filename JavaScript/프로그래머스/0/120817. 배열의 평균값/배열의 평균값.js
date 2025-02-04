function solution(numbers) {
    let num = 0;
    const leng = numbers.length 
    numbers.forEach ((num2) => {
        num+=num2
    })
    const answer=num/leng
    return answer;
}