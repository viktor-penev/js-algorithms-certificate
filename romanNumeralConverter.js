function convertToRoman(num) {
  if(!num || typeof(num) !== "number" || num < 1){
    return
  }

  const numberM = {letter: "M",number:1000};
  const numberCM = {letter: "CM",number:900};
  const numberD = {letter: "D",number:500};
  const numberCD = {letter: "CD",number:400};
  const numberC = {letter: "C",number:100};
  const numberXC = {letter: "XC",number:90};
  const numberL = {letter: "L",number:50};
  const numberXL = {letter: "XL",number:40};
  const numberX = {letter: "X",number:10};
  const numberIX = {letter: "IX",number:9};
  const numberV = {letter: "V",number:5};
  const numberIV = {letter: "IV",number:4};
  const numberI = {letter: "I",number:1};
  const arrayOfNumerals = [
    numberM,
    numberCM,
    numberD,
    numberCD,
    numberC,
    numberXC,
    numberL,
    numberXL,
    numberX,
    numberIX,
    numberV,
    numberIV,
    numberI,
  ]
  let breakDownNumber = Number(num)
  let romanNumber = ""
  arrayOfNumerals.forEach( romanNumeralObject =>{
    const { number, letter } = romanNumeralObject
    if(breakDownNumber >= number){
      const amountOfRepeatsForNumber = Math.floor(breakDownNumber / number)
      // console.log(breakDownNumber, substractNumber)
      for(let i = 0; i < amountOfRepeatsForNumber; i++){
        romanNumber += letter
        // console.log(i, romanNumber)
      }
      const numberToReduce = amountOfRepeatsForNumber * number
      breakDownNumber -= numberToReduce
      // console.log({breakDownNumber})
    }
  })
  console.log("returning roman numeral", romanNumber)
  return romanNumber;
}

convertToRoman(36);
convertToRoman(3036);


convertToRoman(798) //should return the string DCCXCVIII
convertToRoman(891) //should return the string DCCCXCI