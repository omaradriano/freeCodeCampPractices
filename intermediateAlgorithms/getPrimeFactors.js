function getPrimeFactors(num) {
    const factors = {};
    for (let prime = 2; prime <= num; prime++) {
        // Count occurances of factor
        // Note that composite values will not divide num
        while ((num % prime) === 0) {
            factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
            num /= prime;
        }
    }
    return factors;
}

console.log(getPrimeFactors(56))