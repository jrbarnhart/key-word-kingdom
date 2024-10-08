import { auth } from "@/auth";
import LoginButton from "../_components/auth/LoginButton";
import GameBoard from "./GameBoard";
import getWords from "./getWords";

export default async function Game() {
  const session = await auth();

  const words = await getWords(3);

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

  return <GameBoard keyWords={words.keyWords} wordArray={words.wordArray} />;
}
