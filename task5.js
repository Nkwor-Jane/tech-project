const sumArray = arr =>{
    let sum = 0;
    arr.forEach(item =>{
        if(item % 2 === 0 && item % 3 === 0){
            sum += item
        }
    })
    return sum
}

console.log(sumArray([2,5,7,3]))
console.log(sumArray([6]))
console.log(sumArray([12,5,6,3]))
console.log(sumArray([2,12,18]))