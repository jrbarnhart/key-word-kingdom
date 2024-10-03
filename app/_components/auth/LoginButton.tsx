import { signIn } from "@/auth";

export default function LoginButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base rounded-md shadow-lg"
      >
        Sign In with Google
      </button>
    </form>
  );
}
