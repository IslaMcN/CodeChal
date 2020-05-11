var findMedianSortedArrays = function(nums1, nums2) {
    const l = nums1.length + nums2.length
    let last;
    for(let i = 0; i < l/2; i+=1){
        last = min(nums1, nums2)
    }
    return l%2 ? last : (last + min(nums1, nums2))/2
};

function min(n1, n2){
   console.log (n1.length && n2.length ? (n2[0] > n1[0] ? n1.shift() : n2.shift()) : (n1.length ? n1.shift() : n2.shift()))
}

findMedianSortedArrays([1,2], [3,4])