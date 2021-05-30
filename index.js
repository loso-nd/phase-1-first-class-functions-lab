// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    console.log(array)
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    console.log(array.slice(-2))
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = function(x){
    return function(y){
      return  x * y
    }
}


const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers =(arrayOfDrivers, cb) => {
    return cb(arrayOfDrivers)
}
