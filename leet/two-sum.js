"use strict";
function twoSum(nums, target) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        dict[target - nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in dict && i != dict[nums[i]]) {
            return [i, dict[nums[i]]];
        }
    }
    return [-1, -1];
}
;
console.log('test', twoSum([2, 7, 11, 15], 9));
