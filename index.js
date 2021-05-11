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
    
      //First lets remove any spaces at the start and end
    if(wordCache[0]==''){
      for(let i=0; i<wordCache.length;i++){
        if(wordCache[0]==''){
         wordCache.shift();
          }
      }
    };
    
    // Next we will return the converted morse with map then remove any exsesive
    // spaces from the .split(' ') with out removing the spaces between the words.
    return wordCache
      .map(x=>MORSE_CODE[x])
      .join(' ')
      .replace(/  (?! )| /g,'ble_ID-106210_dou')
      .replace(/ble_ID-106210_double_ID-106210_dou/g,' ')
      .replace(/ble_ID-106210_dou/g,'');
      
    }

    //Test Cases

    console.log(decodeMorse('.-')); 
    //Expected Result: 'A'
    
    console.log(decodeMorse('.')); 
    //Expected Result: 'E'
    
    console.log(decodeMorse('..')); 
    //Expected Result: 'I'
    
    console.log(decodeMorse('. .')); 
    //Expected Result: 'EE'
    
    console.log(decodeMorse('.   .')); 
    //Expected Result: 'E E'
    
    console.log(decodeMorse('...---...')); 
    //Expected Result: 'SOS'
    
    console.log(decodeMorse('... --- ...')); 
    //Expected Result: 'SOS'
    
    console.log(decodeMorse('...   ---   ...')); 
    //Expected Result: 'S O S'

    
//     //Alternitive Solution (uncomment block for testing)
//     decodeMorse = function(morseCode){
//       //Trim the whitespace from both ends of the string, 
//       //then split it up, 
//       //convert each letter from morse and loose the extra spaces, 
//       //lastly join it back into a string.
//             return morseCode
//         .trim()
//         .split(/  | /)
//         .map( (code) => MORSE_CODE[code] || ' ')
//         .join('');
//     }
