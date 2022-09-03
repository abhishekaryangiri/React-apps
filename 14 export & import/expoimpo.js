//export import mopdule..
//there are 3 module
//1. person.js  2.utility.js   3.app.js


//1. person.js
const person = {
    name: 'Abhi'
}

export default person;


//2. utility.js
export const clean = () => {


}
export const baseData = 10


//3. app.js
import person from "./expoimpo"  //default import
import prs from './expoimpo'

import { baseData }  from './expoimpo'  //most used
import { clean } from './expoimpo.js'
