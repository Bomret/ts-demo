import { IHaveJob, IMayBeEmployed, Keys, Person } from './01 - basic types'

// intersection types
type RocketScientist = Person & IHaveJob<'Rocket Scientist'>
type MaybeEmployedRocketScientist = RocketScientist & IMayBeEmployed

// built-in types
type EmployedRocketScientist = Required<MaybeEmployedRocketScientist>

type RocketScientistJobDescription = Pick<
  EmployedRocketScientist,
  'job' | 'employer'
>

// key signature manipulation
type OptionalReadonly<T> = { readonly [K in keyof T]?: T[K] }
type OptionalPerson = OptionalReadonly<Person>

// tuples
declare function getPersonalData(userId: string): Promise<Person>

async function processPersonalData(userIds: string[]): Promise<void> {
  const persons = await Promise.all([
    getPersonalData('john'),
    getPersonalData('sarah')
  ])

  const first = persons[0]
  const second = persons[1]

  // error
  const noone = persons[2]
}

// use 'key of' operator to limit specifiable keys to passed model
declare function getPair<T extends object, K extends Keys<T>>(
  key: K,
  model: T
): [K, T[K]]

const model = {
  stringProp: 'ha',
  numberProp: 3
}

const [key, num] = getPair('numberProp', model)

// variadic argument inference
declare function silly<Args extends any[]>(...args: Args): void

silly('hello', 4, true)
