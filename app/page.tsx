import GameMenu from "./_components/ui/GameMenu";

export default async function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-2">
      <h1 className="mt-5 text-5xl font-bold text-white mb-8">
        Key Word Kingdom
      </h1>

      <p className="text-lg text-gray-200 mb-10">
        Enter the kingdom and master the art of words!
      </p>

      <GameMenu />
    </div>
  );
}
