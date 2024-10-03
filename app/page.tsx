import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="mt-20 text-5xl font-bold text-white mb-8">
        Key Word Kingdom
      </h1>

      <p className="text-lg text-gray-200 mb-12">
        Enter the kingdom and master the art of words!
      </p>

      <Link
        href={"/game"}
        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base rounded-md shadow-lg"
      >
        Play
      </Link>

      <footer className="absolute bottom-4 text-gray-300">
        <a href={"https://www.joshuarbarnhart.com"}>My Portfolio</a>
      </footer>
    </div>
  );
}
