function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        if (middleVal < 1){
            rightIdx = middleIdx - 1;
        } else if (middleVal >= 1){
            leftIdx = middleIdx + 1;
        }
    }
    return arr.length - leftIdx;  
}

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0
module.exports = countZeroes