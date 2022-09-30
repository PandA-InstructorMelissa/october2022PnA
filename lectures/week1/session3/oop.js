// States & Countries
//  Countries first because states are with in the countries and thus inherit some of the same attributes

//  A class = a blueprint of what you want to build - containers parameters (columns) and data (rows)
// A constructor = runs when calling the class and creates and instance of the class - contains the attributes or defines each instance


class Country {
    constructor(countryName, countryCapital, countryFlag, government, language) {
        this.countryName = countryName
        this.countryCapital = countryCapital
        this.countryFlag = countryFlag
        this.government = government
        this.language = language
        this.population = '' // These are static and not needed on instance creation but can be added later
        this.currency = ''
        this.state = []
    }
    addCurrency(curr){
        this.currency = curr
    }
    addState(s){
        this.state.push(s)
    }
}

class State extends Country {
    constructor(stateName, capital, flag, accent){
        super()
        this.countryName = super.countryName
        this.stateName = stateName
        this.capital = capital
        this.flag = flag
        this.accent = accent
        this.bird = ''
        this.population = ''
    }

}
let america = new Country("Murica", "DC", "Stars and Stripes", "Constitutional Republic", "JavaScript")
// console.log("Country instance #1a: ", america)
america.currency = "Dollar" // Can be done to change a value but if there is a front end this wouldn't work
// console.log("Country instance #1b: ", america) 
america.addCurrency('NinjaBucks')
// console.log("Country instance #1c: ", america) 

let dojo = new State("Dojo", "Silicon Valley", "Ninja Man", "Silent")
console.log("State instance #1a: ", dojo)
let gendal = new State("Gendal", "Josh City", "MERN Master", "Floridian")

america.addState(dojo)
america.addState(gendal)
console.log("Country instance #1d: ", america) 
console.log("State instance #1b: ", dojo)