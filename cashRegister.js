/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 */

function checkCashRegister(price, cash, cid) {
  const cidObject = {
    PENNY: {},
    NICKEL: {},
    DIME: {},
    QUARTER: {},
    ONE: {},
    FIVE: {},
    TEN: {},
    TWENTY: {},
    ["ONE HUNDRED"]: {},
  }

  let sumChangeInDrawer = 0
  cid.forEach( cidItem =>{
    sumChangeInDrawer += cidItem[1]
    if(cidItem[0] == "PENNY"){
      cidObject.PENNY = { value: 0.01, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 0.01) }
    }
    if(cidItem[0] == "NICKEL"){
      cidObject.NICKEL = { value: 0.05, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 0.05) }
    }
    if(cidItem[0] == "DIME"){
      cidObject.DIME = { value: 0.1, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 0.1) }
    }
    if(cidItem[0] == "QUARTER"){
      cidObject.QUARTER = { value: 0.25, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 0.25) }
    }
    if(cidItem[0] == "ONE"){
      cidObject.ONE = { value: 1, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 1) }
    }
    if(cidItem[0] == "FIVE"){
      cidObject.FIVE = { value: 5, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 5) }
    }
    if(cidItem[0] == "TEN"){
      cidObject.TEN = { value: 10, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 10) }
    }
    if(cidItem[0] == "TWENTY"){
      cidObject.TWENTY = { value: 20, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 20) }
    }
    if(cidItem[0] == "ONE HUNDRED"){
      cidObject["ONE HUNDRED"] = { value: 100, sumOfValue: cidItem[1] == 0 ? 0 : Math.round(cidItem[1] / 100) }
    }
  })

  let changeSum = cash - price
  if(changeSum > sumChangeInDrawer){
    return {
      status: "INSUFFICIENT_FUNDS", change: []
    }
  }
  if(changeSum == sumChangeInDrawer){
    return {
      status: "CLOSED", change: cid
    }
  }
  const reverseCid = cid.reverse()
  const change = [];
  reverseCid.forEach( arrayObject =>{
    if(changeSum >= cidObject[arrayObject[0]].value && cidObject[arrayObject[0]].sumOfValue !== 0){
      const amountOfTimes = Math.floor( changeSum / cidObject[arrayObject[0]].value )
      const removeAmountTimes = ( amountOfTimes <= cidObject[arrayObject[0]].sumOfValue ? amountOfTimes : cidObject[arrayObject[0]].sumOfValue )
      const removeAmount = removeAmountTimes * cidObject[arrayObject[0]].value //parseFloat(a.toFixed(6))
      changeSum = Number(parseFloat(changeSum - removeAmount).toFixed(2))
      change.push([ arrayObject[0], removeAmount ])
    }
  })
  let sumInChange = 0
  change.forEach( cidItem =>{
    sumInChange += cidItem[1]
  })
  if(sumInChange < changeSum){
    return {
      status: "INSUFFICIENT_FUNDS", change: []
    }
  }
  return {
    status: "OPEN",
    change: change
  };
}


const result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
