// 2. Create a function that returns the number of true values in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

let testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

function numTrue(arr){
    let isTrue = 0
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] == true){
            isTrue ++
            
        }
    }
    return (isTrue)
}
console.log(numTrue(testArray))