export const hackerSpeak = (words) => {

  return words.replaceAll(/a/gi, "4") 
  .replaceAll(/e/gi, "3") 
  .replaceAll(/i/gi, "1") 
  .replaceAll(/o/gi, "0") 
  .replaceAll(/s/gi, "5")
}

