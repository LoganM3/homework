// question 1:
// Write a function that adds two numbers together.

 function sum(x,y) {
    return (x + y)
}
console.log(sum(2,2))  //4
console.log (sum(4,1))  //5
console.log(sum(10,4)) //14

console.log('')

// question 2. Write a car object that has a modal and color.  
// Create a property called year then console.log all of the objects properties individually.

let car = {
    modle: 'Jeep',
    color: 'Green',

}
car.year=1997

console.log(car.modle)
console.log(car.color)
console.log(car.year)
console.log(car)

console.log('')
//Question 3. Write a function to get the first element in an array .

function firstElement(array){
    console.log(array[0])
}
let weekdays = ['monday','tuesday','wednesday']
firstElement(weekdays)
