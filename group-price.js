function groupPrice(str) {
    let priceREgex = /(?:USD|\$)(\d+)\.(\d{2})/g;
    let result = [];
    let arr
    while ((arr = priceREgex.exec(str)) !== null) {
        let tmp =[]
        for(let a of arr){tmp.push(a)}
        result.push(tmp);
    }
    return result;
}