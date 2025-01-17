type Person = {
  firstName: string;
  lastName: string;
}

const getFullName = ({ firstName, lastName }: Person): string => {
  return `${firstName} ${lastName}`
}

const person = getFullName({ firstName: "Enggar", lastName: "Rahayu" })
console.log(person)

export{}