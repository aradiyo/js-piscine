
function sameAmount(str, reg1, reg2) {
    const regex1 = new RegExp(reg1, 'g');
    const regex2 = new RegExp(reg2, 'g');
    const arr1 = str.match(regex1)
    const arr2 = str.match(regex2)

    if (arr1 === null && arr2 === null) {
        return true;
    }
    if (arr1 !== null && arr2 !== null) {
        return arr1.length === arr2.length;
    }

    return false;
}