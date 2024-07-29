module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = "hundred";

    if (number === 0) {
        return units[0];
    }

    let readable = "";

    if (number >= 100) {
        const hundredUnit = Math.floor(number / 100);
        readable += units[hundredUnit] + " " + hundreds;
        number = number % 100;
        if (number > 0) {
            readable += " ";
        }
    }

    if (number >= 20) {
        const tenUnit = Math.floor(number / 10);
        readable += tens[tenUnit - 1];
        number = number % 10;
        if (number > 0) {
            readable += " ";
        }
    } else if (number >= 11) {
        readable += teens[number - 11];
        number = 0;
    } else if (number === 10) {
        readable += tens[0];
        number = 0;
    }

    if (number > 0) {
        readable += units[number];
    }

    return readable;
};
