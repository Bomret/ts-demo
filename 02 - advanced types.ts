import {
  Email,
  IHaveAJob,
  IMayBeEmployed,
  Keys,
  Name,
  Person,
  PhoneNumber
} from './01 - basic types'
import { Dennis } from './03 - json import'

declare function kvp<T extends object, K extends Keys<T>>(
  model: T,
  key: K
): [K, T[K]]

const x = kvp({ bla: 'ha', na: 3 }, 'bla')

// intersection types
type RocketScientist = Person & IHaveAJob<'Rocket Scientist'>
type MaybeEmployedRocketScientist = RocketScientist & IMayBeEmployed

// built-in Required type
type EmployedRocketScientist = Required<MaybeEmployedRocketScientist>

// built-in Pick type
type RocketScientistJobDescription = Pick<
  EmployedRocketScientist,
  'job' | 'employer'
>

// key signature manipulation
type OptionalReadonly<T> = { readonly [K in keyof T]?: T[K] }
type OptionalPerson = OptionalReadonly<Person>

// tuples
type EmptyTuple = []
{
  const empty: EmptyTuple = []
  type zero = typeof empty.length

  // error
  const nothing: never = empty[0]
}

type CandidateWithJobDescription = [Person, RocketScientistJobDescription]
{
  const dennisAndJobDescription: CandidateWithJobDescription = [
    Dennis,
    {
      job: 'Rocket Scientist',
      employer: 'NASA'
    }
  ]
  type two = typeof dennisAndJobDescription.length
  const dennis: Person = dennisAndJobDescription[0]
  const jobDescription: RocketScientistJobDescription =
    dennisAndJobDescription[1]
}

type PersonWithNicknames = [Person, ...Name[]]
{
  const dennisAndNickNames: PersonWithNicknames = [Dennis, 'Dan', 'Danny']
  type justNumber = typeof dennisAndNickNames.length
  const dennis: Person = dennisAndNickNames[0]
  const dan: string = dennisAndNickNames[1]
  const danny: string = dennisAndNickNames[2]
}

type CandidateWithContactInfo = [Person, Email, PhoneNumber?]
{
  const dennisAndContactDetails: CandidateWithContactInfo = [Dennis, 'Dan']
  type twoOrThree = typeof dennisAndContactDetails.length
  const dennis: Person = dennisAndContactDetails[0]
  const email: Email = dennisAndContactDetails[1]
  const maybePhoneNumber: number | undefined = dennisAndContactDetails[2]
}

// variadic argument inference
export type Func<Args extends any[], R> = (...args: Args) => R
