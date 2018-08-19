// supported types
export type JsTypes =
  | string
  | boolean
  | number
  | symbol
  | object
  | Date
  | Function

export type SpecialTypes = any | void | null | undefined | never | unknown

// type aliases
export type Name = string
export type Age = number
export type Email = string
export type PhoneNumber = number
export type WithAge = { age: Age }
export type GetGreeting = (greetee: Person) => string
export type Callback<R> = (error: any, result: R) => void

// union type
export type Job = 'Software Developer' | 'Rocket Scientist'
export type ContactInfo = Email | PhoneNumber

// interfaces
export interface IHaveNames {
  firstname: Name
  lastname: Name
}

export interface IHaveAMiddlename {
  middlename: Name
}

// with generic type parameter
export interface IHaveAJob<T extends Job> {
  job: T
}

// with optional property
export interface IMayBeEmployed {
  employer?: string
}

// intersection type
export type Person = IHaveNames & WithAge

// keyof operator
type Keys<T> = keyof T

// unsatisfiable type definition
type StringAndNumber = string & number
