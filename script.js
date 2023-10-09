export function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = {
  add: (x, y) => x + y,

  subtract: (x, y) => x - y,

  divide: (x, y) => x / y,

  multiply: (x, y) => x * y,
};

export function caesarCipher(str, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Regex for alphabet and special characters
  const alphabetRegex = /^[a-zA-Z]+$/;
  const spaceAndSpecialCharRegex = /^[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/;

  const tempStr = str.split("");
  const shiftedStr = [];

  for (let i = 0; i < tempStr.length; i++) {
    const letter = tempStr[i];

    if (letter.match(alphabetRegex)) {
      // Match and shift
      const lowerCaseLetter = letter.toLowerCase();
      let index = alphabet.indexOf(lowerCaseLetter) + shift;
      if (index > 25) {
        // Wrap backt to start
        index -= 26;
      }
      const shiftedLetter = alphabet[index];

      if (letter === letter.toUpperCase()) {
        // Uppercase check
        shiftedStr.push(shiftedLetter.toUpperCase());
      } else {
        shiftedStr.push(shiftedLetter);
      }
    }
    if (letter.match(spaceAndSpecialCharRegex)) {
      // Special character check
      shiftedStr.push(letter);
    }
  }
  return shiftedStr.join("");
}
