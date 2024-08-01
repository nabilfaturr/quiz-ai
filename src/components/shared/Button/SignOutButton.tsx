import { signOutAction } from "@/actions/auth.action";

const SignOutButton = () => {
  return (
    <form action={signOutAction}>
      <button type="submit" className="w-full">
        <p className="text-red-500 text-left">Sign Out</p>
      </button>
    </form>
  );
};

export default SignOutButton;
