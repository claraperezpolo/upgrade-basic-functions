const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    var i = 0, media = 0, paramLength = param.length;
    while (i < paramLength) {
        media = media + param[i++];
}
    return media / paramLength;
}

var promedio = average(numbers);
console.log(promedio)

