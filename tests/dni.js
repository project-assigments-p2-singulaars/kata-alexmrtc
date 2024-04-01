function checkDniLength(dni) {
    let result;

    if(dni.length > 9){
        result = "Dni too long";
    } 
    else if (dni.length < 9){
        result = "Dni too short";
    } 

    return result;
}


module.exports = {
    checkDniLength
}