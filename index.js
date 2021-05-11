const MORSE_CODE = { 
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

decodeMorse = function(morseCode){
      let wordCache = morseCode.split(' ');
    
    if(wordCache[0]==''){
      for(let i=0; i<wordCache.length;i++){
        if(wordCache[0]==''){
         wordCache.shift();
          }
      }
    };
    
    
      
    return wordCache
      .map(x=>MORSE_CODE[x])
      .join(' ')
      .replace(/  (?! )| /g,'ble_ID-106210_dou')
      .replace(/ble_ID-106210_double_ID-106210_dou/g,' ')
      .replace(/ble_ID-106210_dou/g,'');
      
    }

