// 4. Create a function that takes in a number of two-pointers and 
// three-pointers made and returns a basketball team’s total score?

function totalScore(x,y){
    const twoPointers = x * 2
    const threePointers = y * 3
    return twoPointers + threePointers
}

console.log(totalScore(2,2))