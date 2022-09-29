console.log("js sheet connected")

function theDateTime() {
    // console.log("inside the function")
    var t = new Date()
    console.log("the time:", t)
    document.getElementById('dateTime').innerHTML = t
}
theDateTime()

function theDate() {
    // console.log("inside the function")
    var t = new Date()
    var temp = t.toString()
    dateOnly = temp.slice(0, 15)
    console.log("the date:", temp)
    document.getElementById('date').innerHTML = dateOnly
}
theDate()

function theTime() {
    // console.log("inside the function")
    var t = new Date()
    // var temp = JSON.stringify(t)
    stringDate = t.toString()
    console.log("the toString function:", stringDate)
    // dateOnly = temp.slice(1, 11)
    var temp = stringDate.slice(16, 21)
    console.log("the time:", temp)
    document.getElementById('time').innerHTML = temp
}
theTime()
function est() { // the -4*60*60*100 makes the time go back 4 hours
    est = new Date(new Date().getTime() + -4*60*60*1000).toUTCString('en-GB')
    console.log('EST: ', est)
    adjust = est.slice(-13)
    cut = adjust.substr(0,10)
    zone = 'EST'
    final = cut + zone
    // document.getElementById('neg4gmt').innerHTML = final
}
est()