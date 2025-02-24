function solution(numbers) {
    let sum = 0; 
    numbers.forEach (num => {
        sum += num; 
    })
    answer = 45 - sum;
    return answer 
}