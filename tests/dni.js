function checkDniLength(dni) {
  let result = "Valid dni length";

  if (dni.length > 9) {
    result = "Dni too long";
  } else if (dni.length < 9) {
    result = "Dni too short";
  }

  return result;
}

function validDniComposition(dni) {
  let lastCharacter = dni.charAt(8);
  if (!isNaN(parseInt(lastCharacter))) {
    return false;
  }

  for (let index = 0; index < dni.length - 1; index++) {
    let parsedCharacter = parseInt(dni[index]);

    if (isNaN(parsedCharacter)) {
      return false;
    }
  }

  return true;
}

validDniComposition("12345678T");

module.exports = {
  checkDniLength,
  validDniComposition,
};
