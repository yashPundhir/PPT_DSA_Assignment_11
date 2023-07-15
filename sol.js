/*

**Question 5**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

```

**Example 2:**

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/

// Solution

function intersection(nums1, nums2) {
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);
	const result = [];

	for (let num of set1) {
		if (set2.has(num)) {
			result.push(num);
		}
	}

	return result;
}

/*

**Question 6**

Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in `O(log n) time.`

**Example 1:**

```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

```

*/

// Solution

function findMin(nums) {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);

		if (nums[mid] > nums[right]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return nums[left];
}

const nums = [3, 4, 5, 1, 2];
const minElement = findMin(nums);
console.log(minElement);

/*

**Question 7**

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

```

**Example 3:**

Input: nums = [], target = 0
Output: [-1,-1]

*/

// Solution

function searchRange(nums, target) {
	let start = -1;
	let end = -1;

	// Binary search to find the leftmost occurrence of the target
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			start = mid;
			right = mid - 1; // Search for leftmost occurrence
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	// Binary search to find the rightmost occurrence of the target
	left = 0;
	right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			end = mid;
			left = mid + 1; // Search for rightmost occurrence
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return [start, end];
}

/*

**Question 8**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

```

**Example 2:**

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

*/

// Solution

function intersect(nums1, nums2) {
	// Create a hashmap to store frequencies of elements
	const freqMap = {};

	// Iterate over nums1 to populate the hashmap
	for (const num of nums1) {
		freqMap[num] = (freqMap[num] || 0) + 1;
	}

	// Array to store the intersection elements
	const intersection = [];

	// Iterate over nums2 and check for intersection elements
	for (const num of nums2) {
		if (num in freqMap && freqMap[num] > 0) {
			intersection.push(num);
			freqMap[num]--;
		}
	}

	return intersection;
}
