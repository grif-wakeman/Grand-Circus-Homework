const promptly = require('promptly');

 
(async () => {
    const name = await promptly.prompt('Enter a word or phrase: ');
    
    function translatePigLatin() {
        let str = name;
        str = str.toLowerCase();
      
        var vowels = ["a","e","i","o","u"];
        
        var sentence = str.split(/(?=[!?.,])|[_-\s]/).filter(x => x);
        var result = [];
        
        for (let i = 0; i < sentence.length; i++) {
          
          var arr = sentence[i].split(/([aeiouy])/).filter(x => x);
          var firstLetter = "";
      
           if (/[^a-z@]/.test(arr[0])) {
            firstLetter = "punc";
          } else if (/[y]/.test(arr)) {
            firstLetter = "y";
          } else if (vowels.indexOf(arr[0]) != -1) {
            firstLetter = "vowel";
          }

          switch (firstLetter) {
            case 'punc':
              break;
            case 'y':
             if (/[aeiou]/.test(arr)) {
                while (vowels.indexOf(arr[0].charAt(0)) == -1) {
                  arr.push(arr.shift());
                }
                arr.push('ay');
              } else {
                arr.push(arr.shift());
                arr.push('ay');
              }
              break;
            case 'vowel':
              if (/[y]/.test(arr[arr.length-1])) {
                arr.push("ay");
              } else {
                arr.push("way"); 
              }
              break;
            default:
              arr.push(arr.shift());
              arr.push('ay');
              break;
          }
          result.push(arr.join(''));
        }
        return result.join(" ").replace(/\s([?.!,])/gi, '$1');
      }
      
      console.log(translatePigLatin());
})();