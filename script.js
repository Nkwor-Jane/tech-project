
const interestCalc = (principalAmount, lengthOfInvestment) => {
    if(lengthOfInvestment <= 1){
        return ( `Your payment is ${(principalAmount * (1 + (lengthOfInvestment * 0.015)))} `)
    }else if(lengthOfInvestment >= 3 && lengthOfInvestment <= 5){
        return ( `Your payment is ${(principalAmount * (1 + (lengthOfInvestment * 0.025)))} `)
    }else if (lengthOfInvestment  < 10){
        return ( `Your payment is ${(principalAmount * (1 + (lengthOfInvestment * 0.035)))} `)
    }else {
        return ( `Your payment is ${(principalAmount * (1 + (lengthOfInvestment * 0.05)))} `)
    }
}

console.log(`Your interest with us after is 6050 and total payable amount is ${interestCalc(11000, 11)}`);
console.log(`Your interest with us after is 3080 and total payable amount is ${interestCalc(11000, 8)}`);
console.log(`Your interest with us after is 1000 and total payable amount is ${interestCalc(10000, 4)}`);
console.log(`Your interest with us after is 150 and total payable amount is ${interestCalc(10000, 1)}`);