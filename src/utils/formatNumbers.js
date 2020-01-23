export const formatNumbers = (number) => {
  const array = `${number}`.split('').reverse()
  const newArray = []
  array.forEach((val, i) => {
    if (i % 3 === 0) {
      newArray.push(' ')
    }
    newArray.push(val)
  })

  return newArray.reverse().join('')
}


console.log(formatNumbers(10000))