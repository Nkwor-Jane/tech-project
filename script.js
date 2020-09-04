const interestCalc = (principalAmount, lengthOfInvestment) => {
    if(lengthOfInvestment <= 1){
        return ( ` Your interest with us after ${lengthOfInvestment} years is ${Math.ceil(principalAmount * 0.015 * lengthOfInvestment)} and total  paable amount is ${ Math.ceil((principalAmount * (1 + (lengthOfInvestment * 0.015))))} `)
    }else if(lengthOfInvestment >= 3 && lengthOfInvestment <= 5){
        return ( `Your interest with us after ${lengthOfInvestment} years is ${Math.ceil(principalAmount * 0.025 * lengthOfInvestment)} and total payable amount is ${Math.ceil((principalAmount * (1 + (lengthOfInvestment * 0.025))))} `)
    }else if (lengthOfInvestment  < 10){
        return ( `Your interest with us after ${lengthOfInvestment} years is ${Math.ceil(principalAmount * 0.035 * lengthOfInvestment)} and total payable amount is ${Math.ceil((principalAmount * (1 + (lengthOfInvestment * 0.035))))} `)
    }else {
        return ( `Your interest with us after ${lengthOfInvestment} years is ${Math.ceil(principalAmount * 0.05 * lengthOfInvestment)} and total payable amount is ${Math.ceil((principalAmount * (1 + (lengthOfInvestment * 0.05))))} `)
    }}


   
console.log(interestCalc(11000, 11));
console.log(interestCalc(11000, 8));
console.log(interestCalc(10000, 4));
console.log(interestCalc(10000, 1));
console.log(interestCalc(50000, 10))