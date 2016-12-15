var x = '-2';
var y = '0';
var r = 2;
var point = ['-2', '0']


function pointInCircleRectangle(input) {
    var d = 0;
    var d_x = Math.pow((input[0] - 0), 2);
    var d_y = Math.pow((input[1] - 0), 2);
    d = Math.sqrt(d_x + d_y);
    var result = d.toFixed(2);
    if (d > 2) {
        return "no " + result;
    } else {
        return "yes " + result;
    }

}

console.log(pointInCircle(point));