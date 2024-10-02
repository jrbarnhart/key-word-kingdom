import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-purple-800">
      {/* Logo / Title */}
      <h1 className="text-5xl font-bold text-white mb-8">Key Word Kingdom</h1>

      {/* Tagline */}
      <p className="text-lg text-gray-200 mb-12">
        Enter the kingdom and master the art of words!
      </p>

      {/* Call to Action */}
      <div className="space-y-4">
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md shadow-lg"
            >
              Sign In with Google
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-300">
        <a href={"https://www.joshuarbarnhart.com"}>My Portfolio</a>
      </footer>
    </div>
  );
}
