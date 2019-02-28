import { Dennis } from './06 - json import'

// type guard and inline import
export function isPerson(obj: any): obj is import('./01 - basic types').Person {
  if (typeof obj !== 'object') return false

  return 'firstname' in obj && 'lastname' in obj && 'age' in obj
}

export function printNameIfPerson(something: unknown): void {
  if (isPerson(something)) {
    console.log(
      `${something.firstname} ${something.lastname} (${something.age})`
    )
  }
}

printNameIfPerson(Dennis)
