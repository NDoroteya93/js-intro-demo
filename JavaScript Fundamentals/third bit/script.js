function dec2bin(dec) {
    if (dec > 0) {
        var bin = (dec >> 3) & 1;
        return bin;
    }
}

console.log(dec2bin('1024'));