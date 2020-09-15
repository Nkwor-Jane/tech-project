


// const countArray = arr => arr.reduce((a,b) => (a[b] = ++ a[b] || 1, a),{})

const countArray = arr => arr.reduce(function(allValues, value ){
    if(value in allValues){
        allValues[value] ++
    }else{
        allValues[value] = 1
    }
    return allValues
}, {})

console.log(countArray(['java','java', 'kotlin', 'swift']))