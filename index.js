const destructureExample = (obj, arr) => {
    let { name, age } = obj
    const [first, , third] = arr

    return {
        name,
        age
    }
}

const sumNumbers = (...numbers) => {
    let sum = numbers.reduce((start, current) => start + current, 0)
    return sum
}


const createGreeting = (name = "") => `Hello, ${name}! Welcome to our website.`


const isEven = number => (number % 2 === 0) ? 'Even' : 'Odd'


const multiply = (a, b) =>  a * b


const getLargestNumber = ( num1, num2 ) => ( num1 > num2 && num1 ) || ( num2 > num1 && num2 )


const getAddressCity = obj  => obj?.city ? obj.city : 'Unknown'

const doubleNumbers = ( numbers ) => {
    let newNumbers = numbers.map( element => element * 2 )
    return newNumbers
}

const filterEvenNumbers = ( numbers ) => numbers.filter( element => element % 2 === 0)

const sumArray = ( numbers ) => {
    let sum = numbers.reduce((start, current) => start + current, 0)
    return sum
}

const sortNumbers = ( numbers ) => {
    let newNumbers = [...numbers].sort()
    return newNumbers
}