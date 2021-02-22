//A maximal subarray

function getMaxSubSum(arr) {
    let maxSum = 0;
    let nowSum = 0;

    for (let number of arr) { 
        nowSum += number ; 
        maxSum = Math.max(maxSum, nowSum);

        if (nowSum < 0) nowSum = 0;
    }

    return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);