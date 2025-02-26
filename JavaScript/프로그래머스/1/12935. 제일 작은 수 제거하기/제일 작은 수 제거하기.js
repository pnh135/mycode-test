function solution(arr) {
    if(arr.length == 1) {
        const answer = [-1]
        return answer 
        }
        const minNum = Math.min(...arr)
    const answer = arr.filter((arr) => minNum !== arr)
    
    return answer;
}