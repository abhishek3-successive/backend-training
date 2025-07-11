const _ = require('lodash/add')
const __ = require('lodash/subtract')
const multiply = require('lodash/multiply')
const divide = require('lodash/divide')

const add = (a , b)=>{
 return _(a,b)
}

const sub= (a , b)=> {
    return __(a,b)
}

const mul = (a,b)=>{
    return multiply(a,b)
}

const div = (a,b)=>{
    return divide(a,b)
}

module.exports = { add, sub , mul,div};