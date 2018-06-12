function readArray() {
    var len = prompt("Введите длину массива: ");
    var array = [];
    for (var i = 0; i < len; i++)
        array.push(prompt(i + "-й элемент"))
    return array;
}

function positiveNegative(A) {
    var B = [], C = [];

    A.forEach(function (elem) {
        if (elem > 0)
            B.push(elem);
        else if (elem != 0)
            C.push(elem);
    });

    alert('B: ' + B.toString())
    alert('C: ' + C.toString())
}

function countRepeats(A) {
    var repeats = {};
    A.forEach(function (elem) {
        elem = elem.toString();
        if (elem in repeats)
            repeats[elem]++;
        else
            repeats[elem] = 1;
    });

    var result = [];
    for (i in repeats)
        result.push(i + " - " + repeats[i]);

    alert(result.toString());
}

function isAnagrams(first, second) {
    first = first.split('').sort().join('');
    second = second.split('').sort().join('');
    return first === second;
}



positiveNegative(readArray()); // task 1
countRepeats(readArray()); // task 2
alert(isAnagrams(prompt('First string: '), prompt('Second string: '))); // task 3