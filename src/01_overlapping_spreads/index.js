// Given an array of integers, replace every element with its neighbouring numbers (integers next to it),
// then find the duplicate numbers and sum them up. It is guaranteed that provided integers are unique,
// which means they will not repeat.
// 
// For example for the input: -3,5,8,-1,6,11
// * given that neighbouring numbers for -3 are -4 and -2
// * resulting array after replacement with neighbouring numbers would be: -4,-2,4,6,7,9,-2,0,5,7,10,12 
// * duplicate numbers are -2,7
// * the result will be 5.

exports.overlappingSpreads = function (data) {
    //TODO implement me

    let neighboursArray = []
    let duplicatesArray = []

    data.map((val) => {

        const duplicate1 = neighboursArray.includes(val - 1)
        const duplicate2 = neighboursArray.includes(val + 1)

        if (duplicate1) {
            duplicatesArray.push(val - 1)
        } 

        if (duplicate2) {
            duplicatesArray.push(val + 1)
        }

        neighboursArray.push(val - 1)
        neighboursArray.push(val + 1)
    })

    let sumOfduplicates = duplicatesArray.reduce(function (acc, val) { return acc + val; }, 0)
    return sumOfduplicates
}