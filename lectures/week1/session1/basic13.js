// #1 Print 1-255

// Pseudo code
// For loop starting at 1 stop at 255 and increment by 1
// A way to print or show the results
// () goes the conditions of the loop
// 3 parts to the loop where to start; where to end; how to get there
// {} contains the instructions 

for(var i=1; i <= 255; i++) {
    // console.log("current value of i:", i)
    console.log(`Current value of i: ${i}`)
}

// #2 Print Sum 0-255 (print each and also the sum)

// Pseudo Code
// For loop starting at 0 stop at (and include) 255 and increment by 1
// var sum outside the loop
// print each value and it's sum
// add each new value to the current sum

var sum = 0
for(var i = 0; i <= 255; i++) {
    sum += i
    console.log("Current value of i: ", i, "The current sum: ", sum)
}