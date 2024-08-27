/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function p1(nums1, m, nums2, n) {
    let replaces = 0;

    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[replaces];
        replaces++;
    }

    return nums1.sort((a, b) => a - b);
};

const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3
console.log(p1(nums1,m,nums2,n));
