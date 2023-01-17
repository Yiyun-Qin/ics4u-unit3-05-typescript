/**
 * This program prints out
 * the Magic Squares.
 *
 * @author  Nicholas B. & Mr. Coxall
 * @version 1.0
 * @since   2020-01-01
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

function genSquare(
  square: number[],
  currentSquare: number[],
  used: number[],
  index: number
): void {
  for (let counter = 0; counter < currentSquare.length; counter++) {
    if (used[counter] == 0) {
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

function isMagic(preSquare: number[]): boolean {
  // returns true or false for whether or not array is a magic square
  let row1: number = preSquare[0] + preSquare[1] + preSquare[2]
  let row2: number = preSquare[THREE] + preSquare[FOUR] + preSquare[FIVE]
  let row3: number = preSquare[SIX] + preSquare[SEVEN] + preSquare[EIGHT]
  let col1: number = preSquare[0] + preSquare[THREE] + preSquare[SIX]
  let col2: number = preSquare[1] + preSquare[FOUR] + preSquare[SEVEN]
  let col3: number = preSquare[2] + preSquare[FIVE] + preSquare[EIGHT]
  let diag1: number = preSquare[0] + preSquare[FOUR] + preSquare[EIGHT]
  let diag2: number = preSquare[2] + preSquare[FOUR] + preSquare[SIX]

  return (
    row1 == MAGICNUM &&
    row2 == MAGICNUM &&
    row3 == MAGICNUM &&
    col1 == MAGICNUM &&
    col2 == MAGICNUM &&
    col3 == MAGICNUM &&
    diag1 == MAGICNUM &&
    diag2 == MAGICNUM
  )
}

function printMagicSquare(outputSquare: number[]): void {
  // prints inputted array in a magic square format
  console.log('\n*****')
  for (let count = 0; count < outputSquare.length; count++) {
    if (count == THREE || count == SIX) {
      console.log()
      console.log(outputSquare[count] + ' ')
    } else {
      console.log(outputSquare[count] + ' ')
    }
  }
  console.log('\n*****')
}

// main stub, get user input here
let magicSquare = new Array(1, 2, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE)
let extraArray = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0)
let used = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0)
console.log('\n')
console.log('All Possible Magic Squares (3x3):\n')
genSquare(magicSquare, extraArray, used, 0)
