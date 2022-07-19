//Create a function that takes an array and returns 
// the types of values (data types) in a new array.

function arrVal(arr){
    let val =[]

    for(i = 0; i < arr.length; i++){
    val.push(typeof arr[i])
    }
    return val
}


arr1=["hi", 3 , 'hello']
console.log(arrVal(arr1))