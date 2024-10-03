import { auth } from "@/auth";
import LogoutButton from "../auth/LogoutButton";
import LoginButton from "../auth/LoginButton";

export default async function NavBar() {
  const session = await auth();

  return (
    <div className="absolute top-0 w-full flex justify-center">
      <nav className="absolute top-0 w-full p-1 max-w-2xl flex gap-3 items-center justify-end">
        {session?.user ? (
          <>
            <p>Hello, {session.user.name}</p>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </nav>
    </div>
  );
}
