const caesar = (() => {
  const isNotAlphapet = (char) => /\W/.test(char);

  const shiftCharacter = ({ char, shift }) => {
    let charCode = char.charCodeAt();
    if (isNotAlphapet(char)) return char;
    if (char === 'z' || char === 'Z') charCode -= 26;
    return String.fromCharCode(charCode + shift);
  };

  const cipher = ({ string, shift }) => {
    const cipheredString = string.split('').map(
      (char) => shiftCharacter({ char, shift }),
    ).join('');

    return cipheredString;
  };

  return {
    cipher,
  };
})();

export default caesar;