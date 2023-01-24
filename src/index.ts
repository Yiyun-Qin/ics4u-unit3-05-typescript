/**
 * This program prints out
 * the Magic Squares.
 *
 * Author:  Nicholas B. & Mr. Coxall
 * Version: 1.0
 * Since:   2020-01-01
 */

/** The middle left index. */
const THREE: number = 3
/** The center index. */
const FOUR: number = 4
/** The middle right index. */
const FIVE: number = 5
/** The lower left index. */
const SIX: number = 6
/** The lower center index. */
const SEVEN: number = 7
/** The lower right index. */
const EIGHT: number = 8
/** The maximum number for magicNumbers. */
const NINE: number = 9
/** The maximum number for magicNumbers. */
const MAGICNUM: number = 15

/**
 * Generate a magic square.
 *
 * @param {number[]} square The square
 * @param {number[]} currentSquare Current magic square
 * @param {number[]} used If the number is used
 * @param {number} index The index of the magic square
 */
function genSquare (
  square: number[],
  currentSquare: number[],
  used: number[],
  index: number
): void {
  for (let counter = 0; counter < currentSquare.length; counter++) {
    if (used[counter] === 0) {
      currentSquare[index] = square[counter]
      used[counter] = 1
      if (index < currentSquare.length) {
        genSquare(square, currentSquare, used, index + 1)
      }
      if (isMagic(currentSquare)) {
        printMagicSquare(currentSquare)
      }
      used[counter] = 0
    }
  }
}

/**
 * Check if it is a magic square.
 *
 * @param {number[]} preSquare The magic square
 * @returns {boolean} is a square or not
 */
function isMagic (preSquare: number[]): boolean {
  // returns true or false for whether or not array is a magic square
  const row1: number = preSquare[0] + preSquare[1] + preSquare[2]
  const row2: number = preSquare[THREE] + preSquare[FOUR] + preSquare[FIVE]
  const row3: number = preSquare[SIX] + preSquare[SEVEN] + preSquare[EIGHT]
  const col1: number = preSquare[0] + preSquare[THREE] + preSquare[SIX]
  const col2: number = preSquare[1] + preSquare[FOUR] + preSquare[SEVEN]
  const col3: number = preSquare[2] + preSquare[FIVE] + preSquare[EIGHT]
  const diag1: number = preSquare[0] + preSquare[FOUR] + preSquare[EIGHT]
  const diag2: number = preSquare[2] + preSquare[FOUR] + preSquare[SIX]

  return (
    row1 === MAGICNUM &&
    row2 === MAGICNUM &&
    row3 === MAGICNUM &&
    col1 === MAGICNUM &&
    col2 === MAGICNUM &&
    col3 === MAGICNUM &&
    diag1 === MAGICNUM &&
    diag2 === MAGICNUM
  )
}

/**
 * Print the magic square.
 *
 * @param {number[]} outputSquare The print
 */
function printMagicSquare (outputSquare: number[]): void {
  // prints inputted array in a magic square format
  console.log('\n*****')
  let result = ''
  for (let count = 0; count < outputSquare.length; count++) {
    if (count === 2 || count === FIVE) {
      result += outputSquare[count].toString() + '\n'
    } else {
      result += outputSquare[count].toString() + ' '
    }
  }
  console.log(result)
  console.log('\n*****')
}

// main stub, get user input here
const magicSquare = [1, 2, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE]
const extraArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const used = [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log('\n')
console.log('All Possible Magic Squares (3x3):\n')
genSquare(magicSquare, extraArray, used, 0)
