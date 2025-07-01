export const decodeBase64Image = (dataString: string): Buffer => {
  const matches = dataString.match(/^data:image\/png;base64,(.+)$/);
  if (!matches || matches.length !== 2) throw new Error('Base64 inválido.');
  return Buffer.from(matches[1], 'base64');
};
