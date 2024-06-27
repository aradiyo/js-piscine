const letterSpaceNumber = (str) => {
    let arr= str.match(/\w \d(?=\W|$)/g);
    if (arr=== null){return [];}
    else {return arr;}
}