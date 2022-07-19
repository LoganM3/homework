//Create a function that takes an array and a string as arguments and returns the index 
//of the string.

function findIndex(arr,x){
    let a = 0
    for(let i = 0; i <= arr.length; i++){
    if(arr[i] !== x){
        a=i
    }else {
        return i
    }
    
}
return a

}
let arr1 = ["Hello", 'how', 'are', "you?"]
let str = 'are'
console.log(findIndex(arr1,str))



