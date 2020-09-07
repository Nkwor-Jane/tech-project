 const interestCalc = (principalAmount, lengthOfInvestment) => {

    let years = (lengthOfInvestment) =>{
    if(lengthOfInvestment === 1){
        return(` ${lengthOfInvestment} year`)
    }else if(lengthOfInvestment > 1 ){
        return (`${lengthOfInvestment} years`)
    }else{
        return(`${lengthOfInvestment} months`)
    }
}

    if(lengthOfInvestment <= 1){
        return ( ` Your interest with us after ${years(lengthOfInvestment)} is ${Math.ceil(principalAmount * 0.015 * lengthOfInvestment)} and the total  payable amount is ${ Math.ceil((principalAmount * (1 + (lengthOfInvestment * 0.015))))} `)
    }else if(lengthOfInvestment >= 3 && lengthOfInvestment <= 5){
        return ( `Your interest with us after ${years(lengthOfInvestment)} is ${Math.ceil(principalAmount * 0.025 * lengthOfInvestment)} and the total payable amount is ${Math.ceil((principalAmount * (1 + (lengthOfInvestment * 0.025))))} `)
    }else if (lengthOfInvestment  < 10){
        return ( `Your interest with us after ${years(lengthOfInvestment)} is ${Math.ceil(principalAmount * 0.035 * lengthOfInvestment)} and the total payable amount is ${Math.ceil((principalAmount * (1 + (lengthOfInvestment * 0.035))))} `)
    }else {
        return ( `Your interest with us after ${years(lengthOfInvestment)} is ${Math.ceil(principalAmount * 0.05 * lengthOfInvestment)} and the total payable amount is ${Math.ceil((principalAmount * (1 + (lengthOfInvestment * 0.05))))} `)
    }
}



   
console.log(interestCalc(11000, 11));
console.log(interestCalc(11000, 8));
console.log(interestCalc(10000, 4));
console.log(interestCalc(10000, 1));
console.log(interestCalc(50000, 10))