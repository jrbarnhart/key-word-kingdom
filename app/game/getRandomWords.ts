import { promises as fs } from "fs";

export default async function getRandomWords(count: number = 1) {
  const file = await fs.readFile(
    process.cwd() + "/app/_lib/2of12inf.txt",
    "utf8"
  );

  const splitFile = file
    .split("\n")
    .map((line) => {
      return line.trim();
    })
    .filter((line) => !line.includes("%"));

  const randomWords: string[] = [];

  for (let i = 0; i < count; i++) {
    randomWords.push(splitFile[Math.floor(Math.random() * splitFile.length)]);
  }

  return randomWords;
}
