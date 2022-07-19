// 5. Create a function that takes an array of numbers & returns both min 
// and max in that order. (use a loop)


let arr1 = [4,9,2,0]

function minMax(array){

}

function minMax(array){
    
   let min = 3
    let arr2 = [0,0]
    for( i=0; i<array.length; i++){
      if(array[i] === Math.min(array)){
        min = i
      } else {
      max = Math.max(array)
      }
       return min
    }
    //for(const value off arr2){
        //value
   // }
    

}
console.log(minMax(arr1))


function minMax (arr){
  let max = 0
  let min = arr[0]
  for(let i = 0; i < arr.length; i++){
    if( arr[i] < min){
      min = arr[i]
    }
    if (arr[i] > max){
      max = arr[i]
    }
  }
  return[max,min]
}