function solution(s) {
        const StrLength= s.length
        if (StrLength%2==1) {
            const answer = s.substr((StrLength-1)/2,1)
            return answer;
        } else {
            const answer = s.substr(StrLength/2-1,2)
            return answer;
        }
    return answer;
}