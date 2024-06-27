function ionOut(str) {
    let regex = /\b\S*t(?=ion)/g
    let matches = str.match(regex);
    if (matches===null){return []}
    return matches;
}

