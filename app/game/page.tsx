import { auth } from "@/auth";
import LoginButton from "../_components/auth/LoginButton";
import GameBoard from "./GameBoard";
import { getWordsAction } from "./actions";
import NavBar from "../_components/nav/NavBar";
import { z } from "zod";
import { redirect } from "next/navigation";

export default async function Game({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await auth();

  let decodedParams;
  if (typeof searchParams.options === "string") {
    try {
      console.log(searchParams);
      decodedParams = JSON.parse(atob(searchParams.options));
    } catch {
      console.error("Invalid options params");
      redirect("/");
    }
  }

  const gameOptionsSchema = z.object({
    wordLength: z.number(),
    timer: z.number(),
    totalKeyWords: z.number(),
  });

  const verifiedParams = gameOptionsSchema.safeParse(decodedParams);

  let wordLength = 0,
    timer = 0,
    totalKeyWords = 0;
  if (!verifiedParams.success) {
    console.log("INVALID OPTIONS");
    redirect("/");
  } else {
    wordLength = verifiedParams.data.wordLength;
    timer = verifiedParams.data.timer;
    totalKeyWords = verifiedParams.data.totalKeyWords;
  }

  const words = await getWordsAction({
    totalKeyWords,
    maxLength: wordLength,
  });

  if (!session?.user) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="space-y-4 text-neutral-50 bg-purple-100/20 backdrop-blur-md p-4 rounded-lg border-indigo-400 border-2">
          <p>Please Sign In to play.</p>
          <LoginButton />
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <GameBoard
        keyWords={words.keyWords}
        keyWordCount={totalKeyWords}
        wordArray={words.wordArray}
      />
    </>
  );
}
