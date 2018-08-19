import { promisify as utilPromisify } from 'util'
import { Callback } from './01 - basic types'
import { Dennis } from './03 - json import'
import { Person } from './06- oop'

type PropertiesOnly<T> = {
  [P in keyof T]: T[P] extends Function ? never : T[P]
}
type FunctionsOnly<T> = { [P in keyof T]: T[P] extends Function ? T[P] : never }

type PersonPropertiesOnly = PropertiesOnly<Person>
type PersonFunctionsOnly = FunctionsOnly<Person>

declare function getPerson(name: string, cb: Callback<Person>): void

type PromisedFunc<F extends Function> = F extends (
  cb: Callback<infer R>
) => void
  ? () => Promise<R>
  : F extends (arg: infer A, cb: Callback<infer R>) => void
    ? (arg: A) => Promise<R>
    : F

function promisify<F extends Function>(f: F): PromisedFunc<F> {
  return utilPromisify(f) as PromisedFunc<F>
}

const getPersonAsync = promisify(getPerson)

async function getAndPrintDennis() {
  const person = await getPersonAsync(Dennis.lastname)
  console.dir(person)
}
