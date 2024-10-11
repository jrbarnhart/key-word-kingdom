import { auth } from "@/auth";
import LoginButton from "../auth/LoginButton";
import Link from "next/link";

export default async function NavBar() {
  const session = await auth();

  return (
    <div className="absolute top-0 w-full flex justify-center">
      <nav className="absolute top-0 w-full p-1 max-w-2xl flex gap-3 items-center justify-between">
        {session?.user ? (
          <>
            <p>Player: {session.user.name}</p>
            <Link
              href={process.env.ROOT_ROUTE ?? "/"}
              className="bg-red-400 text-black font-bold rounded-md border border-black p-1"
            >
              Quit Game
            </Link>
          </>
        ) : (
          <>
            <p>Player: User</p>
            <LoginButton />
          </>
        )}
      </nav>
    </div>
  );
}
