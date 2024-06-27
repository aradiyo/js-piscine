const letterSpaceNumber = (str) => {
 let arr = str.match(/\w \d(?=\w|$)/g);
 if (arr == nil){return [];}
 else {return arr;}
}