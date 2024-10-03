import { signOut } from "@/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base rounded-md shadow-lg"
      >
        Sign Out
      </button>
    </form>
  );
}
