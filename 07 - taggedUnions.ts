import { Func } from './02 - advanced types'
import { assertNever } from './common'

interface Ok<T> {
  tag: 'ok'
  value: T
}

interface Failure<Reason> {
  tag: 'failure'
  reason: Reason
}

type Result<T, Reason> = Ok<T> | Failure<Reason>

function tryCatch<Args extends any[], R>(
  f: Func<Args, R>,
  ...args: Args
): Result<R, any> {
  try {
    const res = f(...args)
    return { tag: 'ok', value: res }
  } catch (err) {
    return { tag: 'failure', reason: err }
  }
}

const result = tryCatch(name => `Hello ${name}`, 'John')

switch (result.tag) {
  case 'ok':
    console.error(result.value)
    break
  case 'failure':
    console.log(result.reason)
    break
  default:
    assertNever(result)
    break
}
