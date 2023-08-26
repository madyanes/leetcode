/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const numMap = {};

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return [];
};

export default twoSum;
