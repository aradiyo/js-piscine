function repeat(str, num) {
    // Check if num is a non-negative integer
    if (num < 0 || !Number.isInteger(num)) {
        throw new Error('Invalid number. Number must be a non-negative integer.');
    }

    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
}