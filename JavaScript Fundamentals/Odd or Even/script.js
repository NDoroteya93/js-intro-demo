var arr = ['0'];

function solve(args) {
    var num = parseInt(args[0]);
    if (num > -30 && num < 30) {
        if (num % 2 === 0) {
            console.log("even " + num);
        } else {
            console.log("odd " + num);
        }
    }
}

solve(arr);