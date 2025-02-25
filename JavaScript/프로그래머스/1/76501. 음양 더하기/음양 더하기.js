function solution(absolutes, signs) {
    let num = 0
    for (i=0; i<absolutes.length; i++) {
        if(signs[i] == true) {
            num+= absolutes[i]
        } else {
            num+= -1*absolutes[i]
    }}
    return num;
}