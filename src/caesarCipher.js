export default function caesarCipher(str, shift) {
  const shiftChar = (char) => {
    const isUpper = char >= 'A' && char <= 'Z';
    const isLower = char >= 'a' && char <= 'z';
    if (!isUpper && !isLower) return char;

    const base = isUpper ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - base + shift) % 26) + base
    );
  };

  return str
    .split('')
    .map((char) => shiftChar(char))
    .join('');
}
