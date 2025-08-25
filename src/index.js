function splitStringByLength(string, length) {
  const result = [];
  for (let i = 0; i < string.length; i += length) {
    result.push(string.slice(i, i + length));
  }
  return result;
}

function binaryToMorse(binaryString) {
  if (binaryString === '**********') return ' ';
  return binaryString
    .replaceAll('00', '')
    .replaceAll('11', '-')
    .replaceAll('10', '.');
}

function morseToLetter(morse) {
  if (morse === ' ') return morse;
  const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };
  return MORSE_TABLE[morse];
}

module.exports = function decode(expr) {
  const letters = splitStringByLength(expr, 10);
  return letters
    .map((el) => {
      const morseEl = binaryToMorse(el);
      return morseToLetter(morseEl);
    })
    .join('');
};
