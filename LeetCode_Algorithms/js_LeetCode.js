// Leet Code Alogrithm Challenges - Javascript

// Challenge 283: Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
    // Input: [0,1,0,3,12]
    // Output: [1,3,12,0,0]
// Note:
    // You must do this in-place without making a copy of the array.
    // Minimize the total number of operations.

nums = [0,1,0,3,12];

// Solution 1 - swap
function moveZeros(nums) {
    let cur = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[i];
            nums[i] = nums[cur];
            nums[cur] = temp;
            cur++;
        }
    }
    return nums;
};

moveZeros(nums);

// Solution 2 - replace
function moveZeros2(nums){
    let index = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
        }
    }
    for(let j = index; j < nums.length; j++){
        nums[j] = 0;
    }
    return nums;
}

moveZeros2(nums);
