export const shuffleArray = <T extends unknown[]>(array: T) => {
  const clonedArray = [...array]

  for (let i = clonedArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = clonedArray[i]
    clonedArray[i] = clonedArray[j]
    clonedArray[j] = temp
  }

  return clonedArray
}
