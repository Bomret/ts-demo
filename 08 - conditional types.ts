import { Callback, Job } from './01 - basic types'
import { Person } from './07 - oop'

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

interface JobSearchCriteria {
  sucksAtMath: boolean
}

declare function findFittingJob<Criteria extends JobSearchCriteria>(
  criteria: Criteria
): Criteria extends { sucksAtMath: true }
  ? 'Software Developer'
  : 'Rocket Scientist'

const dennisJob: 'Software Developer' = findFittingJob({ sucksAtMath: true })

// advanced conditional types with type inference on a function
type PromisedFunc<F> = F extends (cb: Callback<infer R>) => void
  ? () => Promise<R>
  : F extends (arg: infer A, cb: Callback<infer R>) => void
  ? (arg: A) => Promise<R>
  : never

declare function getPerson(name: string, cb: Callback<Person>): void
declare function promisify<F extends Function>(f: F): PromisedFunc<F>

const getPersonAsync = promisify(getPerson)
