function make() {
    var a = parseInt(prompt("Input a: "));
    var b = parseInt(prompt("Input b: "));
    var c = parseInt(prompt("Input c: "));

    var x1, x2, d;
    d = b * b - 4 * a * c;

    if (d < 0) {
        alert('Уравнение не имеет действительных корней');
        return;
    };

    x1 = (-b - Math.sqrt(d)) / (2 * a);
    x2 = (-b + Math.sqrt(d)) / (2 * a);
    alert('x1 = ' + x1);
    alert('x2 = ' + x2);
}

function simple() {
    s = prompt("Введите натуральное число", '2');
    x = parseInt(s);

    if (x == 1)
        alert("Введённое число ни простое, ни составное.");
    else {
        var b = true;
        for (var a = 2; a < x; a++) {
            if (x % a == 0) {
                alert("Введённое число составное.");
                return;
            }
            alert("Введённое число простое.");
        }
    }
}

function sum() {
    var sum = 0;
    var n = prompt("Введите n:");

    for (var i = 1; i <= n; i++)
        sum += 1 / i;

    alert("Сумма: " + sum);
}

function reverse() {
    var n = prompt("Введите n:").toString();

    alert(n.split("").reverse().join(""));
}

make(); // task 1
simple(); // task 2
sum(); // task 3
reverse(); //task 4