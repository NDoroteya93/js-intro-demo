var arr = ['2.5', '2'];

function poitnCircleRectangle(input) {
    var str = '';
    var r = 1.5;
    var x0 = 1;
    var y0 = 1;
    var x = parseFloat(input[0]);
    var y = parseFloat(input[1]);
    var isInCircle = ((x - x0) * (x - x0) + (y - y0) * (y - y0) <= r * r);
    var isInRectangle = (x < -1 || x > 5) || (y > 1 || y < -1);
    if (isInCircle && isInRectangle) {
        str = "inside circle outside rectangle";
    }
    if (!isInCircle && isInRectangle) {
        str = "outside circle outside rectangle";

    }

    if (isInCircle && !isInRectangle) {
        str = "inside circle inside rectangle";
    }
    if (!isInCircle && !isInRectangle) {
        str = "outside circle inside rectangle";
    }

    return str;
}

console.log(poitnCircleRectangle(arr));