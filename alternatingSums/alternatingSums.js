function alternatingSums(a) {
    let arrayA = []
    let arrayB = []
    let totalWeight = []
    for(let i = 0; i<a.length; i++){
        if(i % 2 == 1){
            arrayB.push(a[i])
        }else{
            arrayA.push(a[i])
        }
    }
    let sum = arrayA.reduce(function(a,b){
        return a + b
    }, 0)
    totalWeight.push(sum)
    sum = arrayB.reduce(function(a,b){
        return a + b
    },0)
    totalWeight.push(sum)
    return totalWeight
}
