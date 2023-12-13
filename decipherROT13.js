function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetArray = alphabet.split("")
  const doubleAlphabetArray = `${alphabet}${alphabet}`.split("")
  const strArray = str.split("")
  const mapStringArray = strArray.map( (char, index)=>{
    let newChar = char
    alphabetArray.forEach( (letter, letterIndex) =>{
      if(letter == char){
        newChar = doubleAlphabetArray[letterIndex + 13]
      }
    })
    return newChar
  })
  console.log("result", mapStringArray.join(""))
  return mapStringArray.join("");
}

rot13("SERR PBQR PNZC");