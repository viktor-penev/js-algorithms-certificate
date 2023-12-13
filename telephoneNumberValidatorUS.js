

function telephoneCheck(str) {
  if(!str || typeof(str) !== "string" 
  || str.startsWith("-") || str.match(/[a-zA-Z]/g)
  ){
    // console.log({str, type: typeof(str)})
    return false
  }
  const clearWhitespaces = str.replace(/\s/g, "")
  if(clearWhitespaces.startsWith("1")){
    if(str.replace(/\D/g, "").length > 11) return false
    if(clearWhitespaces.match(/(1\(\d\d\d\)\d\d\d\-\d\d\d\d)|(1\(\d\d\d\)\d\d\d\d\d\d\d)|(1\d\d\d\-\d\d\d\-\d\d\d\d)|(1\d\d\d\d\d\d\d\d\d\d)/g)){
      return true
    }else{
      return false
    }
  }
  else if(clearWhitespaces.startsWith("(")){
    if(str.replace(/\D/g, "").length > 10) return false
    if(clearWhitespaces.match(/(\(\d\d\d\)\d\d\d\-\d\d\d\d)|(\(\d\d\d\)\d\d\d\d\d\d\d)/g)){
      return true
    }else{
      return false
    }
  }
  else if(clearWhitespaces.startsWith("5")){
    if(str.replace(/\D/g, "").length > 10) return false
    if(clearWhitespaces.match(/(5\d\d\-\d\d\d\-\d\d\d\d)|(5\d\d\d\d\d\d\d\d\d)/g)){
      return true
    }else{
      return false
    }
  }
  else{
    return false
  }
}

console.log( telephoneCheck("(275)76227382") )


// 555-555-5555
// (555)555-5555
// (555) 555-5555
// (555)5555555
// 555 555 5555
// 1 555 555 5555
// 15555555555
// 1(555)5555555
// 1(555)555-5555