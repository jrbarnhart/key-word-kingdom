import { useCallback, useEffect, useState } from "react";
import * as fs from "fs";
import * as readline from "readline";

export default async function useKeyWords(totalWords: number = 1) {
  const [words, setWords] = useState<string[]>([]);

  const _getKeyWords = (
    filename: string,
    numWords: number
  ): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      const filesStream = fs.createReadStream(filename);
      const rl = readline.createInterface({
        input: filesStream,
        crlfDelay: Infinity,
      });

      let lineCount = 0;
      const selectedWords: string[] = [];
      const selectedIndicies = new Set<number>();

      rl.on("line", (line) => {
        lineCount++;

        // Reservoir Sampling algorithm used to handle any size of word list
        if (selectedIndicies.size < numWords) {
          if (Math.random() < numWords / lineCount) {
            selectedWords.push(line.trim());
            selectedIndicies.add(lineCount - 1);
          }
        }
      });

      rl.on("close", () => {
        if (selectedWords.length < numWords) {
          reject(new Error(`File contains fewer than ${numWords}`));
        } else {
          resolve(selectedWords);
        }
      });

      rl.on("error", (err) => {
        reject(err);
      });
    });
  };

  const getNew = useCallback(async () => {
    const newKeyWords = await _getKeyWords("../_lib/2of12inf.txt", totalWords);
    setWords(newKeyWords);
  }, [totalWords]);

  useEffect(() => {
    getNew();
  }, [getNew]);

  const keyWords = { words, getNew };

  return keyWords;
}
