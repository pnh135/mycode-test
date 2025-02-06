function solution(n) {
    const num= n.toString().split('');
    let sum=0;
    for (let i=0; i<num.length; i++) {
        sum+=parseInt(num[i]);
    }
    return sum;
}