function addBorder(picture) {
    // shift a string of '*' to the array the length of the strings + 2
    let topFrame = '*'.repeat(picture[0].length)
    picture.unshift(topFrame)
    console.log(picture)
    // add a '*' to the begining and end of each string
    for(let i = 0; i < picture.length; i ++){
        picture[i] = picture[i] + '*'
        picture[i] = '*' + picture[i]
    }
    
    
    // push a string of '*' to the array with the same length as the strings
    let bottomFrame = '*'.repeat(picture[1].length)
    
    picture.push(bottomFrame)
    return picture
}
