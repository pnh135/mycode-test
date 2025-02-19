function solution(phone_number) {
    const stringCount = phone_number.length
    const blindString= '*'.repeat(stringCount-4)
    const displayString = phone_number.slice(stringCount-4, stringCount)
    const answer = blindString+displayString
    return answer;
}