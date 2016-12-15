var arr = ['3', '4'];
var area = 0;
var perimeter = 0;

function solve(args) {
    var w = parseFloat(args[0]);
    var h = parseFloat(args[1]);
    area = w * h;
    perimeter = (2 * w) + (2 * h);

    return area.toFixed(2) + ' ' + perimeter.toFixed(2);


}

console.log(solve(arr));