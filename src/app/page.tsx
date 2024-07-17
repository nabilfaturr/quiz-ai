import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form
        action={async () => {
          "use server";

          await signIn("google");
        }}
      >
        <Button type="submit">Login</Button>
      </form>
      {session && (
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button type="submit">Logout</Button>
        </form>
      )}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
