// supported types
export type JsTypes =
  | string
  | boolean
  | number
  | symbol
  | object
  | null
  | undefined
  | Date
  | Function

export type SpecialTypes = any | void | never | unknown

// type aliases
export type Name = string
export type Age = number
export type Email = string
export type PhoneNumber = number
export type WithAge = { age: Age }
export type GetGreeting = (greetee: Person) => string
export type Callback<R> = (error: any, result: R) => void

// enums
export enum Title {
  Bachelor,
  Master,
  PhD
}

// union type
export type Job = 'Software Developer' | 'Rocket Scientist'
export type ContactInfo = Email | PhoneNumber

// interfaces
export interface IHaveNames {
  firstname: Name
  lastname: Name
}

// with readonly property
export interface IHaveAMiddlename {
  readonly middlename: Name
}

// with generic type parameter
export interface IHaveJob<T extends Job> {
  job: T
}

// with optional property
export interface IMayBeEmployed {
  employer?: string
}

// intersection type
export type Person = IHaveNames & WithAge

// keyof operator
export type Keys<T> = keyof T

// unsatisfiable type definition
type StringAndNumber = string & number
