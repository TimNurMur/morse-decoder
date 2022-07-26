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
    let dozens = [];
    let result = [];
    for (let i = 0; i < expr.length; i += 10) {
        dozens.push(expr.slice(i, i + 10));
    }
    dozens.forEach(toDuce => {
        let arrDuce = [];
        let arrMorse = [];
        for (let i = 0; i < toDuce.length; i += 2) {
            arrDuce.push(toDuce.slice(i, i + 2));
        }
        arrDuce.forEach(toMorse => {
            (toMorse === '00') ? arrMorse.push('') : 
            (toMorse === '11') ? arrMorse.push('-') : 
            (toMorse === '10') ? arrMorse.push('.') : 
            (toMorse === '**') ? arrMorse.push('*') :
            false;
        });
        let morseString = arrMorse.join('');
        for (let key in MORSE_TABLE) {
            if (key === morseString) {
                result.push(MORSE_TABLE[key]);
            } else if (morseString === '*****') {
                result.push(' ');
                break;
            }
        }
    });
    return result.join('');
}

module.exports = {
    decode
}