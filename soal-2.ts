function wrapInArray<T>(item: T): T[] {
  return [item]
}

const numberArray = 26
console.log(wrapInArray<number>(numberArray))

const stringArray = "Haloo"
console.log(wrapInArray<string>(stringArray))
export{}