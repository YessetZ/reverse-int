module.exports = function reverse (n) {
    
    if (typeof n != "number")
        return 0;
    
    n = Math.abs(n);
    let length = n.toString().length - 1;
    let reverse = 0;

    for ( ; length >= 0; length--) {
        reverse += Math.abs(n) % 10 * (10 ** length);
        n = Math.floor(n / 10);
    }

    return reverse;
}
