function checkDniLength(dni) {
  let result = "Valid dni length";

  if (dni.length > 9) {
    result = "Dni too long";
  } else if (dni.length < 9) {
    result = "Dni too short";
  }

  return result;
}

module.exports = {
    checkDniLength
};
