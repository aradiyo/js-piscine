const letterSpaceNumber = (str) => {
 let arr = str.match(/\w \d(?=\w|$)/g);
 if (arr == null){return [];}
 else {return arr;}
}