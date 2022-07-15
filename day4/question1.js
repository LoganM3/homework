// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Call that function for a 
// few different scores and log the result to ensure it works.

function assignGrade(x){
    if(x >= 90){
        return 'A'
    }else if(x >= 80){
        return "B"
    }else if(x >= 70){
        return "C"
    }else if(x >= 60){
        return "D"
    } else{
        return "F"
    }
    
}

console.log(assignGrade(45))
console.log(assignGrade(78))