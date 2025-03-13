function solution(arr1, arr2) {
    let newArr = [], i
    for (i=0; i<arr1.length; i++){ 
    newArr.push(arr1[i].map((x, y) => arr1[i][y] + arr2[i][y]))
    };
    return newArr;
}