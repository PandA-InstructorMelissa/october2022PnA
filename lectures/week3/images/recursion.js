const test01 = () => { // 2. Starting function // 5. starting function 
    console.log("Our cruise is almost over how sad :(") // 3. printing our console.log
    test01() // 4. calling function
}
// test01() // 1. Activate function

sum = 0
const add = (num) => {
    for (let i = 0; i <= num; i++) {
        sum = sum + i
        console.log("the sum", sum)
    }
}
// add(100)

const newAdd = (num) => {
    sum = sum + num
    console.log('the sum', sum)
    var newNum = num + 1
    if (newNum <= 100) {
        newAdd(newNum)
    }
}

newAdd(1)