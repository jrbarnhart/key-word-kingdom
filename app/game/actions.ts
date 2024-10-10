"use server";

import getWords from "./getWords";

export async function getWordsAction({
  ...options
}: {
  totalKeyWords: number;
  maxLength: number;
}) {
  const { totalKeyWords, maxLength } = options;
  // Get the words
  const words = await getWords({ totalKeyWords, maxLength });
  // Return the words and relevant options
  return words;
}
