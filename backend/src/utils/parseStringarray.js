module.exports = function parseStringarray(arrayAsString){
    return arrayAsString.split(",").map(tech => tech.trim());
}