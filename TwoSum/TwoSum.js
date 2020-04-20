var twoSum = function(nums, target) {
    console.log(nums)
    // Traverse through nums
    for(let i = 0; i <= nums.length - 1 ; i ++){
        for (let j = 1; j <= nums.length; j++){
            if(i != j){
              if (nums[i] + nums[j] === target ){
                console.log(nums[i]+nums[j])
                return [i,j]
            }  
            }
            
        }
    }
    // Twice and if pointer 1 and pointer 2 equals 9 then we return their indices
    
};