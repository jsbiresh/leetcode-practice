
const nums = [ 1, 3, 4, 2, 2 ]

var findDuplicate = function(nums) {
    // const sortedNums = nums.sort();
    // let prev;
    // for (let i = 0; i < sortedNums.length; i++) {
    //     if (sortedNums[i] === prev) {
    //         return sortedNums[i];
    //     } else {
    //         prev = sortedNums[i];
    //     }
    // }
    
    // return sortedNums;
    // =============================
    // const numSet = new Set();
    // for (let i = 0; i < nums.length; i++) {
        //     if (numSet.has(nums[i])) return nums[i];
        //     numSet.add(nums[i]);
        // }
    // =============================
    // let result = 0;
    // for (let i = 1; i <= nums.length - 1; i++) {
    //     result ^= i;
    // }
    // console.log(result);
    // for (const num of nums) {
    //     result ^= num;
    // }
    // return result;

    // =========================
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        index = Math.abs(nums[i]);
        if (nums[i] < 0)
            return nums[i]
        else
            nums[i] = -nums[i];
    }
    return -1;
};

console.log(findDuplicate(nums));