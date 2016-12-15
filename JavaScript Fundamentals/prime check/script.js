var arr = ['-3'];
var isPrime = true;

function primeCheck(args) {
    var num = parseInt(args[0]);
    if (num > 1) {
        if (num === 2) {
            return true;
        } else {
            for (var i = 2; i < num; i += 1) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

    } else {
        return false;
    }
}

console.log(primeCheck(arr));