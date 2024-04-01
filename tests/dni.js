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
  let lastCharacter = dni.charAt(dni.length - 1);
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

function validDniLetter(dni) {
  let lastDniCharacter = dni.charAt(dni.length - 1);

  let validLetter = true;

  switch (lastDniCharacter) {
    case "U":
      validLetter = false;
      break;
    case "I":
      validLetter = false;
      break;
    case "O":
      validLetter = false;
      break;
    case "Ñ":
      validLetter = false;
      break;
    default:
      break;
  }

  return validLetter;
}

module.exports = {
  checkDniLength,
  validDniComposition,
  validDniLetter,
};
