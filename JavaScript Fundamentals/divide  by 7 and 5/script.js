var arr = ['140'];

function solve(args) {
    var num = parseInt(args[0]);
    if (num % 7 === 0 && num % 5 === 0) {
        return true + " " + num;
    } else {
        return false + " " + num;
    }
}

console.log(solve(arr));