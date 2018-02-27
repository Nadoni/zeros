module.exports = function getZerosCount(number) {

    let count = 0;
    let multifive = 5;


    while (number/multifive >= 1){
        count += Math.trunc(number/multifive);
        multifive *= 5;
    }

    return count;
}
