var arr = ['6'];

function solve(args) {
    var index = args[0].length - 3;
    var str = args[0].charAt(index);
    var num = Number(str);
    if (num === 7) {
        return true;
    } else if (args[0].length < 3) {
        return false + ' 0';
    } else {
        return false + ' ' + num;
    }

}

console.log(solve(arr));