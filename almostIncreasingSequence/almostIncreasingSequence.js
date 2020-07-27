function almostIncreasingSequence(sequence) {
    let ans = 0
    for(let i = 0; i < sequence.length-1; i++){
        if(sequence[i]>= sequence[i+1]){
            if(i!=0 && sequence[i+1]<=sequence[i-1]){
               sequence[i+1] = sequence[i] 
            }
            ans++
        }
    }
    return ans<2
}