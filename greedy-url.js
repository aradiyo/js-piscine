
function getURL(dataSet) {
    return dataSet.match(/https?:\/\/\S+/g);
}

function greedyQuery(dataSet) {
    return dataSet.match(/https?:\/\/[^\s?]+\?([^\s&=]+=[^\s&=]*&){2,}([^\s&=]+=[^\s]*)/g);
}

function notSoGreedy(dataSet) {
    return dataSet.match(/https?:\/\/[^\s?]+\?([^\s&=]+=[^\s&=]*&){1,2}([^\s&=]+=[^\s&=]*)(?= )/g);
}