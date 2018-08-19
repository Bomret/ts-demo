import { GetGreeting, Person } from './01 - basic types'
import { Dennis } from './03 - json import'

// create intersection type
export function combine<A, B>(first: A, second: B): A & B {
  return Object.assign({}, first, second)
}

const johnConnor: Person = combine(
  {
    firstname: 'John',
    lastname: 'Connor'
  },
  { age: 32 }
)

// traditional function
export function getGreeting(greeter: Person, greetee: Person): string {
  return `Hi, ${greetee.firstname}. My name is ${greeter.firstname} ${
    greeter.lastname
  }.`
}

// arrow function
const bindGreeter = (greeter: Person): GetGreeting =>
  getGreeting.bind(null, greeter)

const letDennisGreet = bindGreeter(Dennis)
const dennisGreetsJohn = letDennisGreet(johnConnor)

console.log(dennisGreetsJohn)
