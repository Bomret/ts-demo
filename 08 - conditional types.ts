import { promisify as utilPromisify } from 'util'
import { Callback, Job } from './01 - basic types'
import { Dennis } from './03 - json import'
import { Developer, Mary, Person, RocketScientist } from './06 - oop'

// built-in Exclude and Extract types
type RocketScientistTitle = Exclude<Job, 'Software Developer'>
type SoftwareDeveloperTitle = Extract<Job, 'Software Developer'>

// applying predicate to all members of T
type PropertiesOnly<T> = {
  [K in keyof T]: T[K] extends Function ? never : T[K]
}
type FunctionsOnly<T> = { [K in keyof T]: T[K] extends Function ? T[K] : never }

type PersonPropertiesOnly = PropertiesOnly<Person>
type PersonFunctionsOnly = FunctionsOnly<Person>

// conditional type as function return value
// NOTE: for some reason unbeknownst to me you have to cast your return value to 'any' even if the type is correct
function getJob<TPerson extends Developer | RocketScientist>(
  person: TPerson
): TPerson extends Developer ? 'Software Developer' : 'Rocket Scientist' {
  if (person instanceof Developer) return person.job as any
  return 'Rocket Scientist' as any
}

const marysJob: 'Rocket Scientist' = getJob(Mary)

// advanced conditional types on a function
type PromisedFunc<F> = F extends (cb: Callback<infer R>) => void
  ? () => Promise<R>
  : F extends (arg: infer A, cb: Callback<infer R>) => void
    ? (arg: A) => Promise<R>
    : never

declare function getPerson(name: string, cb: Callback<Person>): void

function promisify<F extends Function>(f: F): PromisedFunc<F> {
  return utilPromisify(f) as PromisedFunc<F>
}

const getPersonAsync = promisify(getPerson)

async function getAndPrintDennis() {
  const person = await getPersonAsync(Dennis.lastname)
  console.dir(person)
}
