export const textCropping = (text: string, length: number) => {
  const words = text.split(' ');
  let res: string[] = [];

  for (const word of words) {
    const str = res.join(' ');
    if (str.length < length) {
      res.push(word);
      continue;
    }

    return str.endsWith(',') ? str.slice(0, -1) : str;
  }
};
