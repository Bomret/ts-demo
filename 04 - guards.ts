import { Person } from './01 - basic types'
import { Dennis } from './03 - json import'

// type guard
export function isPerson(obj: any): obj is Person {
  if (typeof obj !== 'object') return false

  return 'firstname' in obj && 'lastname' in obj && 'age' in obj
}

export function printNameIfPerson(something: unknown): void {
  if (isPerson(something)) {
    console.log(
      `${something.firstname} ${something.lastname} (${something.firstname})`
    )
  }
}

printNameIfPerson(Dennis)
