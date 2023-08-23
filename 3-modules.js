// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./3-names')
const sayHi = require('./4-utils')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

const kastiya = require('./4-names')
const greet = require('./5-utils')
const data = require('./6-alternativeFlavor')
require('./7-mindGrenade')

greet(kastiya.boss)
greet(kastiya.cudda)

