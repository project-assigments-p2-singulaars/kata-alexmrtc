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

function checkIndicatedLetter(dni) {
  const dniLetter = dni.charAt(dni.length - 1);
  let expectedLetter = "";

  const dniNumericalValue = parseInt(dni.split(dniLetter)[0]);

  const dniRemainderValue = dniNumericalValue % 23;

  switch (dniRemainderValue) {
    case 0:
      expectedLetter = "T";
      break;
    case 1:
      expectedLetter = "R";
      break;
    case 2:
      expectedLetter = "W";
      break;
    case 3:
      expectedLetter = "A";
      break;
    case 4:
      expectedLetter = "G";
      break;
    case 5:
      expectedLetter = "M";
      break;
    case 6:
      expectedLetter = "Y";
      break;
    case 7:
      expectedLetter = "F";
      break;
    case 8:
      expectedLetter = "P";
      break;
    case 9:
      expectedLetter = "D";
      break;
    case 10:
      expectedLetter = "X";
      break;
    case 11:
      expectedLetter = "B";
      break;
    case 12:
      expectedLetter = "N";
      break;
    case 13:
      expectedLetter = "J";
      break;
    case 14:
      expectedLetter = "Z";
      break;
    case 15:
      expectedLetter = "S";
      break;
    case 16:
      expectedLetter = "Q";
      break;
    case 17:
      expectedLetter = "V";
      break;
    case 18:
      expectedLetter = "H";
      break;
    case 19:
      expectedLetter = "L";
      break;
    case 20:
      expectedLetter = "C";
      break;
    case 21:
      expectedLetter = "K";
      break;
    case 22:
      expectedLetter = "E";
      break;
  }

  return dniLetter === expectedLetter ? true : false;
}

function isNie(dni) {
  const firstDniCharacter = dni.charAt(0);

  let result = false;

  if (
    firstDniCharacter === "X" ||
    firstDniCharacter === "Y" ||
    firstDniCharacter === "Z"
  )
    result = true;

  return result;
}

function isValidDni(dni) {
  let lengthValidation = checkDniLength(dni);

  if (lengthValidation !== "Valid dni length") {
    return false;
  }

  let isValidComposition = validDniComposition(dni);

  if (isValidComposition !== true) {
    return false;
  }

  let notContainsLetterException = validDniLetter(dni);

  if (notContainsLetterException === false) {
    return false;
  }

  let addecuateLetter = checkIndicatedLetter(dni);

  if (addecuateLetter !== true) {
    return false;
  }

  return true;
}

module.exports = {
  checkDniLength,
  validDniComposition,
  validDniLetter,
  checkIndicatedLetter,
  isNie,
  isValidDni,
};
