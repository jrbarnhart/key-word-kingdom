export function getMoreChars({
  keyWord,
  charTarget = 9,
}: {
  keyWord: string;
  charTarget?: number;
}) {
  const alphaArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphaSet = new Set(alphaArray);

  const targetCount =
    charTarget > 0 && charTarget <= 26 ? Math.floor(charTarget) : 9;

  const strArray = keyWord.split("");

  const uniqueCharSet = new Set<string>();

  for (const char of strArray) {
    uniqueCharSet.add(char);
  }

  for (const char of Array.from(uniqueCharSet)) {
    alphaSet.delete(char);
  }

  for (let i = uniqueCharSet.size; i < targetCount; i++) {
    const randomIndex = Math.floor(Math.random() * alphaSet.size);
    const randomChar = Array.from(alphaSet)[randomIndex];
    uniqueCharSet.add(randomChar);
    alphaSet.delete(randomChar);
  }

  const chars = Array.from(uniqueCharSet).sort(() => Math.random() - 0.5);
  return chars;
}
