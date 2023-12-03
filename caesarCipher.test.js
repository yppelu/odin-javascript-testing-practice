import caesarCipher from "./caesarCipher";

test('Encodes a word', () =>
  expect(caesarCipher('string', 2))
    .toBe('uvtkpi'));

test('Keeps the same case', () =>
  expect(caesarCipher('camelCaseString', 1))
    .toBe('dbnfmDbtfTusjoh'));

test('Wraps from a to z', () =>
  expect(caesarCipher('Wasp', 15))
    .toBe('Lphe'));

test('Does not touch punctuation', () =>
  expect(caesarCipher('A;.,f!?> /<&^#$@)-(Jj', 5))
    .toBe('F;.,k!?> /<&^#$@)-(Oo'));

test('Overall check', () => {
  const string = 'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.';
  const encodedString = 'Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.';
  expect(caesarCipher(string, 7))
    .toBe(encodedString);
});
