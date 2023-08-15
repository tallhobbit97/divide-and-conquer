function findFloor(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        if (middleVal == num){
            return num;
        } else if (middleVal > 0 && arr[middleIdx - 1] <= num && num < middleVal){
            return arr[middleIdx - 1];
        } else if (num < arr[mid]){
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
    return -1
}

module.exports = findFloor