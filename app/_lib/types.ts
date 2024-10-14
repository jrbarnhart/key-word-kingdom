export type GameSession = {
  time: string;
  options: {
    wordLength: number;
    timer: number;
    totalKeyWords: number;
  };
  data: {
    keyWords: string[];
    currentKeyWordIndex: number;
    hint: string[];
    guesses: string[];
  };
};
