const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedMessage = '';
  
    for (let i = 0; i < expr.length; i += 10) {
      const morseCode = expr.substr(i, 10);
  
      if (morseCode === '**********') {
        decodedMessage += ' ';
      } else {
        let morseSymbol = '';
        for (let j = 0; j < morseCode.length; j += 2) {
          const symbol = morseCode.substr(j, 2);
          if (symbol === '10') {
            morseSymbol += '.';
          } else if (symbol === '11') {
            morseSymbol += '-';
          }
        }
        decodedMessage += MORSE_TABLE[morseSymbol];
      }
    }
  
    return decodedMessage;
  }

module.exports = {
    decode
}