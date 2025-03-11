function solution(price, money, count) {
    let totalCount = 0
    for (i=1; i<=count; i++){
        totalCount+=i
    }
    const Expected = price* totalCount
    const Required = money - Expected 
    if (Required >=0) {
        answer = 0
    } else {
        answer = -Required
    }

    return answer;
}