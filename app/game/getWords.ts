import { promises as fs } from "fs";

export default async function getWords({
  ...options
}: {
  totalKeyWords: number;
  maxLength: number;
}) {
  const MAX_KEY_WORDS = 100;
  const { totalKeyWords, maxLength } = options;

  const file = await fs.readFile(
    process.cwd() + "/app/_lib/2of12inf.txt",
    "utf8"
  );

  const splitFile = file
    .split("\n")
    .map((line) => {
      return line.trim();
    })
    .filter((line) => !line.includes("%") && line.length <= maxLength);

  // Shuffle the splitFile array
  for (let i = splitFile.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [splitFile[i], splitFile[j]] = [splitFile[j], splitFile[i]];
  }

  let randomWords = splitFile.slice(
    0,
    totalKeyWords >= 1 && totalKeyWords <= MAX_KEY_WORDS ? totalKeyWords : 1
  );

  // If there aren't enough random words then just add the word missing until there are enough
  if (
    totalKeyWords > 0 &&
    totalKeyWords <= MAX_KEY_WORDS &&
    randomWords.length < totalKeyWords
  ) {
    randomWords = Array(totalKeyWords).fill("missing");
  } else if (randomWords.length !== totalKeyWords) {
    randomWords = ["missing"];
  }

  const words = { wordArray: splitFile, keyWords: randomWords };
  return words;
}
