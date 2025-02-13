function solution(x) {
    let sum = String(x).split('');
    let num = 0
    for (i=0; i<sum.length; i++) {
      num+=Number(sum[i]) 
    }
    const isHarshad = x%num 
    return isHarshad===0 ? true: false;
}
