export default function caesarCipher(string, factor) {
  let cipheredString = '';

  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i])) {
      const charCode = string.charCodeAt(i);
      cipheredString += (charCode <= 90)
        ? String.fromCharCode((charCode - 65 + factor) % 26 + 65)
        : String.fromCharCode((charCode - 97 + factor) % 26 + 97);
    } else {
      cipheredString += string[i];
    }
  }

  return cipheredString;
}

function isLetter(letter) {
  const letterCharCode = letter.charCodeAt(0);

  const upperBoundaries = letterCharCode >= 65 && letterCharCode <= 90;
  const lowerBoundaries = letterCharCode >= 97 && letterCharCode <= 122;

  return upperBoundaries || lowerBoundaries;
}
